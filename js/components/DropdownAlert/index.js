import React, { Component } from 'react'

import {
  View, Text, StyleSheet,
  TouchableOpacity, Animated, StatusBar,
  Platform, Dimensions, Image, PanResponder
} from 'react-native'

import { Colors, Images } from 'themes'

const DEFAULT_IMAGE_DIMENSIONS = 36
const WINDOW = Dimensions.get('window')
// Colors
const MAIN_INFO_COLOR = '#257991'
const MAIN_WARN_COLOR = '#cd853f'
const MAIN_ERROR_COLOR = '#414141'
const NOTIFICATION_COLOR = '#ffffff'

var closeTimeoutId = null
var panResponder

export default class DropdownAlert extends Component {
  // static propTypes = {
  //   imageSrc: PropTypes.oneOfType([
  //     PropTypes.string,
  //     PropTypes.number
  //   ]),
  //   cancelBtnImageSrc: PropTypes.oneOfType([
  //     PropTypes.string,
  //     PropTypes.number
  //   ]),
  //   closeInterval: PropTypes.number,
  //   startDelta: PropTypes.number,
  //   endDelta: PropTypes.number,
  //   containerStyle: View.propTypes.style,
  //   titleStyle: Text.propTypes.style,
  //   messageStyle: Text.propTypes.style,
  //   imageStyle: Image.propTypes.style,
  //   cancelBtnImageStyle: Image.propTypes.style,
  //   titleNumOfLines: PropTypes.number,
  //   messageNumOfLines: PropTypes.number,
  //   onClose: PropTypes.func,
  //   onCancel: PropTypes.func,
  //   showCancel: PropTypes.bool
  // }
  static defaultProps =  {
    onClose: null,
    onCancel: null,
    closeInterval: 4000,
    startDelta: -100,
    endDelta: 0,
    titleNumOfLines: 1,
    messageNumOfLines: 3,
    imageSrc: null,
    cancelBtnImageSrc: Images.dropdownCancel,
    showCancel: false,
    containerStyle: {
      padding: 16,
      flexDirection: 'row'
    },
    titleStyle: {
      fontSize: 16,
      textAlign: 'left',
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'transparent'
    },
    messageStyle: {
      fontSize: 14,
      textAlign: 'left',
      fontWeight: 'normal',
      color: 'white',
      backgroundColor: 'transparent'
    },
    imageStyle: {
      padding: 8,
      width: DEFAULT_IMAGE_DIMENSIONS,
      height: DEFAULT_IMAGE_DIMENSIONS,
      alignSelf: 'center'
    },
    cancelBtnImageStyle: {
      padding: 8,
      width: DEFAULT_IMAGE_DIMENSIONS,
      height: DEFAULT_IMAGE_DIMENSIONS,
      alignSelf: 'center'
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      animationValue: new Animated.Value(0),
      duration: 450,
      type: 'info',
      message: '',
      title: '',
      isOpen: false,
      startDelta: props.startDelta,
      endDelta: props.endDelta,
      topValue: 0
    }
    // Render
    this.renderButton = this.renderButton.bind(this)
    this.renderDropDown = this.renderDropDown.bind(this)
    // Action
    this.alert = this.alert.bind(this)
    this.alertWithType = this.alertWithType.bind(this)
    this.dismiss = this.dismiss.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onClose = this.onClose.bind(this)
    // Util
    this.animate = this.animate.bind(this)
    // Pan Responder
    this.handlePanResponderMove = this.handlePanResponderMove.bind(this)
    this.handlePanResponderEnd = this.handlePanResponderEnd.bind(this)
  }
  componentWillMount() {
    panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd,
    })
  }
  alert(title, message) {
    if (title == undefined) {
      title = null
    }
    if (message == undefined) {
      message = null
    }
    this.alertWithType('custom', title, message)
  }
  alertWithType(type, title, message) {
    if (this.validateType(type) == false) {
      return
    }
    if (this.state.isOpen) {
      this.dismiss()
      return
    }
    if (this.state.isOpen == false) {
      this.setState({
        type: type,
        message: message,
        title: title,
        isOpen: true,
        topValue: 0
      })
    }
    this.animate(1)
     if (this.props.closeInterval > 1) {
      closeTimeoutId = setTimeout(function() {
        this.onClose()
      }.bind(this), this.props.closeInterval)
    }
  }
  dismiss(onDismiss) {
    if (this.state.isOpen) {
      if (closeTimeoutId != null) {
        clearTimeout(closeTimeoutId)
      }
      this.animate(0)
      setTimeout(function() {
        if (this.state.isOpen) {
          this.setState({
            isOpen: false
          })
          if (onDismiss) {
            var data = {
              type: this.state.type,
              title: this.state.title,
              message: this.state.message
            }
            onDismiss(data)
          }
        }
      }.bind(this), (this.state.duration))
    }
  }
  onClose() {
    this.dismiss(this.props.onClose)
  }
  onCancel() {
    this.dismiss(this.props.onCancel)
  }
  animate(toValue) {
    Animated.spring (
      this.state.animationValue, {
        toValue: toValue,
        duration: this.state.duration,
        friction: 9
      }
    ).start()
  }
  onLayoutEvent(event) {
    var {x, y, width, height} = event.nativeEvent.layout
    var actualStartDelta = this.state.startDelta
    var actualEndDelta = this.state.endDelta
    // Prevent it from going off screen.
    if (this.props.startDelta < 0) {
      var delta = 0 - height
      if (delta != this.props.startDelta) {
        actualStartDelta = delta
      }
    } else if (this.props.startDelta > WINDOW.height) {
      actualStartDelta = WINDOW.height + height
    }
    if (this.props.endDelta < 0) {
      actualEndDelta = 0
    } else if (this.props.endDelta > WINDOW.height) {
      actualEndDelta = WINDOW.height - height
    }
    var heightDelta = WINDOW.height - this.props.endDelta - height
    if (heightDelta < 0) {
      actualEndDelta = this.props.endDelta + heightDelta
    }
    if (actualStartDelta != this.state.startDelta || actualEndDelta != this.state.endDelta) {
      this.setState({
        startDelta: actualStartDelta,
        endDelta: actualEndDelta
      })
    }
  }
  validateType(type) {
    if (type.length === 0 || type === null) {
      console.warn('Missing DropdownAlert type. Available types: info, warn, error or custom')
      return false
    }
    if (type != 'info' && type != 'warn' && type != 'error' && type != 'notification' && type != 'custom') {
      console.warn('Invalid DropdownAlert type. Available types: info, warn, error or custom')
      return false
    }
    return true
  }
  handleStartShouldSetPanResponder(e: Object, gestureState: Object): boolean {
    return true
  }
  handleMoveShouldSetPanResponder(e: Object, gestureState: Object): boolean {
    return true
  }
  handlePanResponderMove(e: Object, gestureState: Object) {
    if (gestureState.dy < 0) {
      this.setState({
        topValue: gestureState.dy
      })
    }
  }
  handlePanResponderEnd(e: Object, gestureState: Object) {
    const delta = this.state.startDelta / 5
    if (gestureState.dy < delta) {
      this.dismiss(this.props.onClose)
    }
  }
  renderText(type, text, style, numberOfLines) {
    if (text != null) {
      if (text.length) {
        let textStyle = style;
        if(type === 'notification') {
          textStyle = {...style, color: '#666'}
        }
        if (Platform.OS === 'android') { // Using numberOfLines for Android causes a crash.
          return (
            <Text style={textStyle}>{text}</Text>
          )
        } else {
          return (
            <Text style={textStyle} numberOfLines={numberOfLines}>{text}</Text>
          )
        }
      }
    }
    return null
  }
  renderImage(source, style) {
    if (source != null) {
      if (typeof source === 'number') {
        return (
          <Image style={style} source={source} />
        )
      } else if (typeof source === 'string') {
        if (style['width'] == false) {
          style['width'] = DEFAULT_IMAGE_DIMENSIONS
        }
        if (style['height'] == false) {
          style['height'] = DEFAULT_IMAGE_DIMENSIONS
        }
        return (
          <Image style={style} source={{uri: source}} />
        )
      }
    }
    return null
  }
  renderStatusBar(type, backgroundColor) {
    if (Platform.OS === 'android') {
      return (
        <StatusBar backgroundColor={backgroundColor} />
      )
    } else if (type != 'custom') {
      return (
        <StatusBar barStyle='light-content' />
      )
    }
    return null
  }
  renderButton(source, style, onPress, underlayColor, isRendered) {
    if (source != null && isRendered) {
      return (
        <TouchableOpacity style={{alignSelf: style.alignSelf, width: style.width, height: style.height}} onPress={onPress} underlayColor={underlayColor}>
          {this.renderImage(source, style)}
        </TouchableOpacity>
      )
    }
    return null
  }
  dragResponders() {
    return {...panResponder.panHandlers}
  }
  renderDropDown(isOpen) {
    if (isOpen == true) {
      var style = [this.props.containerStyle, styles.defaultContainer]
      var source = this.props.imageSrc
      var backgroundColor = this.props.containerStyle.backgroundColor
      switch (this.state.type) {
        case 'info':
          style = [styles.defaultContainer, {backgroundColor: MAIN_INFO_COLOR}]
          source = Images.dropdownInfo
          backgroundColor = MAIN_INFO_COLOR
          break;
        case 'warn':
          style = [styles.defaultContainer, {backgroundColor: MAIN_WARN_COLOR}]
          source = Images.dropdownWarn
          backgroundColor = MAIN_WARN_COLOR
          break;
        case 'error':
          style = [styles.defaultContainer, {backgroundColor: MAIN_ERROR_COLOR}]
          source = Images.dropdownError
          backgroundColor = MAIN_ERROR_COLOR
          break;
        case 'notification':
          style = [styles.defaultContainer, {backgroundColor: NOTIFICATION_COLOR}]
          source = Images.dropdownNotification
          backgroundColor = NOTIFICATION_COLOR
      }
      return (
          <Animated.View
           ref={(ref) => this.mainView = ref}
           {...panResponder.panHandlers ? this.dragResponders() : null}
           style={{
              transform: [{
                translateY: this.state.animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [this.state.startDelta, this.state.endDelta]
                }),
              }],
              position: 'absolute',
              top: this.state.topValue,
              left: 0,
              right: 0
            }}>
            {this.renderStatusBar(this.state.type, backgroundColor)}
            <TouchableOpacity
                onPress={(this.props.showCancel) ? null : this.onClose}
                underlayColor={backgroundColor}
                onLayout={(event) => this.onLayoutEvent(event)}>
              <View style={style}>
                {this.renderImage(source, this.props.imageStyle)}
                <View style={styles.textContainer}>
                  {this.renderText(this.state.type, this.state.title, this.props.titleStyle, this.props.titleNumOfLines)}
                  {this.renderText(this.state.type, this.state.message, this.props.messageStyle, this.props.messageNumOfLines)}
                </View>
                {this.renderButton(this.props.cancelBtnImageSrc, this.props.cancelBtnImageStyle, this.onCancel, backgroundColor, this.props.showCancel)}
              </View>
            </TouchableOpacity>
          </Animated.View>
      )
    }
    return null
  }
  render() {
    return (
      this.renderDropDown(this.state.isOpen)
    )
  }
}

var styles = StyleSheet.create({
  defaultContainer: {
    padding: 8,
    paddingTop: (Platform.OS === 'android') ? 0 : 20,
    flexDirection: 'row'
  },
  textContainer: {
    flex: 1,
    padding: 8
  }
})
