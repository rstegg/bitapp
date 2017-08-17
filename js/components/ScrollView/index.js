import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ScrollView = ({ children, style, viewIsInsideTabBar, resetScrollToCoords, enableAutoAutomaticScroll, extraHeight, extraScrollHeight, ...rest }) =>
  <KeyboardAwareScrollView
    {...rest}
    style={style}
    viewIsInsideTabBar={viewIsInsideTabBar}
    resetScrollToCoords={resetScrollToCoords}
    enableAutoAutomaticScroll={enableAutoAutomaticScroll}
    extraHeight={extraHeight}
    extraScrollHeight={extraScrollHeight}>
    {children}
  </KeyboardAwareScrollView>

export default ScrollView
