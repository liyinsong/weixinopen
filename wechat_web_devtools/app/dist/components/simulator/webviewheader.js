"use strict";function init(){var e=(require("path"),require("fs"),require("../../lib/react.js")),t=require("../../cssStr/cssStr.js"),i=require("../../stores/webviewStores.js"),a=(require("../../stores/windowStores.js"),require("../../actions/leftviewActions.js")),s=(require("../../weapp/utils/tools.js"),require("../../common/log/log.js")),o=(require("../../weapp/utils/projectManager.js"),"white"),n="#000000",r=e.createClass({displayName:"WebviewHeader",getInitialState:function(){var e=this.props,t=e.project,i=e.appJSON,a=e.pageJSON,s="";return t&&(s=a.navigationBarTitleText||i.window.navigationBarTitleText||""),{title:s,webviewID:parseInt(this.props.webviewID),canGoBack:!1,showRightBtn:!0,showBarLoading:!1}},_upWebviewStatus:function(e,t){s.info("WebviewHeader.js UP_WEBVIEW_STATUS webviewID:"+e+" data:"+JSON.stringify(t)),0!==e&&(t.canGoBack=!0),Object.assign(this.state,t),this.setState(this.state)},_cleanWebview:function(){var e=this.state.webviewID;s.info("WebviewHeader.js _cleanWebview webviewID:"+e),this.setState({title:"",showRightBtn:!0,showBarLoading:!1})},_setInterfaceFromPageFrame:function(e){var t=e.name;"setNavigationBarTitle"===t?this.setState({title:e.value}):"showNavigationBarLoading"===t?this.setState({showBarLoading:!0}):"hideNavigationBarLoading"===t&&this.setState({showBarLoading:!1})},_setInterfaceRes:function(e,t,i,a){i&&("hideOptionMenu"===t||"hideMenuItems"===t||"hideAllNonBaseMenuItem"===t?this.setState({showRightBtn:!1}):"showOptionMenu"!==t&&"showMenuItems"!==t&&"showAllNonBaseMenuItem"!==t||this.setState({showRightBtn:!0}))},componentDidMount:function(){var e=this.state.webviewID;i.on("SET_INTERFACE_RES_"+e,this._setInterfaceRes),i.on("UP_WEBVIEW_STATUS_"+e,this._upWebviewStatus),i.on("CLEAN_WEBVIEW_"+e,this._cleanWebview),i.on("SET_INTERFACT_FROMPAGEFRAME_"+e,this._setInterfaceFromPageFrame)},componentWillUnmount:function(){var e=this.state.webviewID;i.removeListener("CLEAN_WEBVIEW_"+e,this._cleanWebview),i.removeListener("SET_INTERFACE_RES_"+e,this._setInterfaceRes),i.removeListener("UP_WEBVIEW_STATUS_"+e,this._upWebviewStatus),i.removeListener("SET_INTERFACT_FROMPAGEFRAME_"+e,this._setInterfaceFromPageFrame)},handleRightClick:function(){a.clickRightHeader(this.state.webviewID)},goBack:function(e){this.props.goBack()},closeLocation:function(){this.goBack(),this.props.closeLocation()},chooseLocation:function(){this.goBack(),this.props.chooseLocation()},render:function(){var i=this.props,a=i.offset,s=i.hideBack,r=i.webviewID,c=i.project,l=(i.isMap,i.goBack,i.showFooter),h=i.pageJSON,w=i.appJSON;if(this.props.isMap)return e.createElement("div",{style:{width:a.width},className:"simulator-hd"},e.createElement("div",{onClick:this.closeLocation,className:"simulator-hd-back"},e.createElement("span",null,"取消")),e.createElement("h3",{className:"simulator-hd-title"},"位置"),e.createElement("div",{onClick:this.chooseLocation,className:"simulator-hd-option"},"发送"));var d={width:a.width,backgroundColor:h.navigationBarBackgroundColor||w.window.navigationBarBackgroundColor||n},u=!s&&this.state.canGoBack?{}:t.visibilityHidden;0==r&&c&&(u=t.visibilityHidden);var v={};this.props.project?v=t.visibilityHidden:this.state.showRightBtn||(v=t.visibilityHidden);var m={color:h.navigationBarTextStyle||w.window.navigationBarTextStyle||o},p=this.state.title||h.navigationBarTitleText||w.window.navigationBarTitleText;return e.createElement("div",{style:d,className:"simulator-hd"},e.createElement("div",{onClick:this.goBack,style:u,className:"simulator-hd-back"},e.createElement("i",{className:"simulator-hd-back-icon"}),e.createElement("span",{style:m},"返回")),e.createElement("h3",{className:"simulator-hd-title",style:m},this.state.showBarLoading?e.createElement("i",{className:"simulator-hd-title-loading"}):"",p),e.createElement("div",{style:v,onClick:l,className:"simulator-hd-option"},e.createElement("i",{className:"simulator-hd-option-icon"})))}});_exports=r}var _exports;init(),module.exports=_exports;