import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector, change as changeFieldValue } from 'redux-form/immutable';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Immutable from 'immutable';
import Icon from 'react-native-vector-icons/FontAwesome';
import { bindActionCreators } from 'redux';
import { RenderCameraButton, RenderGallaryButton } from '../../components/navbarComponent';
import styles from './styles';
import mainStyles from '../../assets/css/mainStyles';

const selector = formValueSelector('trashLoggerTileForm');
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class StepSecond extends React.Component {
  constructor(props) {
    super(props);
    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    this.selectCameraTapped = this.selectCameraTapped.bind(this);
    this.renderImageField = this.renderImageField.bind(this);
    this.removeSelectedImage = this.removeSelectedImage.bind(this);
    this.state = {
      data: Immutable.fromJS({ images: this.props.imageSelected || [] }),
    };
  }

  componentDidMount() {
    this.props.handleChildFormSubmit(this.props.handleSubmit);
  }

  componentDidUpdate(nextProps) {
    if (nextProps.imageSelected !== this.props.imageSelected) {
      this.props.handleShowRightArrow(this.props.imageSelected.length !== 0);
    }
  }

  removeSelectedImage(index) {
    this.setState((prevState) => {
      const data = prevState.data;
      return {
        data: data.deleteIn(['images', index]),
      };
    }, () => {
      const updateValue = this.state.data.get('images').map(c => (c.get('image') && { image: c.get('image') })).toJS();
      this.props.actions.changeFieldValue(this.props.form, 'upload_images_attributes', updateValue, false);
    });
  }

  selectPhotoTapped(field) {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };
    if (!this.isOverLimit()) {
      ImagePicker.launchImageLibrary(options, (response) => {
        this.selectImageResponse(response, field);
      });
    }
  }

  selectCameraTapped(field) {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };
    if (!this.isOverLimit()) {
      ImagePicker.launchCamera(options, (response) => {
        this.selectImageResponse(response, field);
      });
    }
  }

  selectImageResponse(response, field) {
    const imageData = `data:image/jpeg;base64,${response.data}`;
    if (!response.didCancel && !response.error && !response.customButton) {
      this.setState((prevState) => {
        const data = prevState.data;
        return {
          data: data.updateIn(['images'], image => image.push(Immutable.fromJS({ image: imageData }))),
        };
      }, () => {
        field.input.onChange(
          this.state.data.get('images').map(c => (c.get('image') && { image: c.get('image') })).toJS(),
        );
      },
      );
    }
  }

  isOverLimit() {
    if (this.state.data.get('images').size >= 6) {
      Alert.alert('You can upload max 6 images');
      return true;
    }
    return false;
  }

  renderImageField(field) {
    return (
      <View style={[mainStyles.box, mainStyles.imagePicker]}>
        <View style={styles.centerFlex}>
          <RenderCameraButton
            onClick={() => this.selectCameraTapped(field)}
            color="black"
          />
          <Text style={[mainStyles.label, mainStyles.mediaText]}>Camera</Text>
        </View>
        <View style={styles.centerFlex}>
          <RenderGallaryButton
            onClick={() => this.selectPhotoTapped(field)}
            size={40}
            color="black"
          />
          <Text style={[mainStyles.label, { marginTop: -10, left: -5 }]}>Library</Text>
        </View>
      </View>
    );
  }


  render() {
    const { imageSelected } = this.props;
    return (
      <View style={styles.centerFlex}>
        <View style={{ minHeight: height - 320 }}>
          <View style={[styles.imageContainer, { width }]}>
            {imageSelected && imageSelected.map((image, i) => (
              <View
                key={`imageSelected${i}`}
                style={[styles.imageContent, { width: (width / 2) }]}
              >
                <Image
                  source={{ uri: image.image }}
                  style={[styles.imageDimension, mainStyles.box]}
                />
                <TouchableOpacity onPress={() => this.removeSelectedImage(i)} style={{ position: 'absolute', right: 50 }}>
                  <Text>
                    <Icon name="window-close" size={25} color="white" />
                  </Text>
                </TouchableOpacity>
              </View>
              ),
            )}
            <Text
              style={[mainStyles.textFont, mainStyles.fontAkzB,
                { paddingLeft: 50, paddingRight: 50 }]}
            >
              You can attach up to 6 images to this Trash Log.
              {'\n'}{'\n'}
              Use your camera to take photos of the pollution you would
              like to report, or select existing photos from your Library.
            </Text>
          </View>
        </View>
        <Field
          name="upload_images_attributes"
          component={this.renderImageField}
        />
      </View>
    );
  }
}

StepSecond.propTypes = {
  actions: PropTypes.shape({
    changeFieldValue: PropTypes.func.isRequired,
  }).isRequired,
  handleChildFormSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  imageSelected: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  form: PropTypes.string.isRequired,
  handleShowRightArrow: PropTypes.func.isRequired,
};

StepSecond.defaultProps = {
  imageSelected: [],
};

function mapStateToProps(state) {
  return {
    imageSelected: selector(state, 'upload_images_attributes'),
  };
}

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators({ changeFieldValue }, dispatch),
  }
);

const pollutionReportFormObj = reduxForm({
  form: 'trashLoggerTileForm', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(StepSecond);

export default connect(mapStateToProps, mapDispatchToProps)(pollutionReportFormObj);
