themeInjected = false;

function addCSS()
{
	console.log("trying to inject theme")
	if (themeInjected)
		return;
	wv = document.getElementsByClassName('Webview');
    wv[0].insertCSS('#center-column,#conversation-title-bar>*,.controls-center,.controls-left,.controls-right,div.detail-view-main,div>.controls-center,footer.detail-view-footer,header.detail-view-header,span.context-menu,span.message-status,span>.context-menu,time,ul.ephemeral-timer{background-color:#2c2c2b!important;color:#e6e6e6!important}img.detail-view-image{max-width:initial!important}#conversation-input-bar,conversation-list-calling-cell{background-color:#2c2c2b!important}.call-ui__button{background-color:rgba(0,0,0,.25)!important}.content-titlebar,.preferences-titlebar{background-color:#2c2c2b!important}.call-ui__button svg>path{fill:#fff!important}hangup-icon>svg>path{fill:red!important}conversation-list-calling-cell .conversation-list-cell-name{color:#e6e6e6!important}conversation-list-calling-cell .conversation-list-cell-description{color:rgba(255,255,255,.68)!important}.controls-right-button svg path,.conversation-title-bar-icon svg path{fill:#b7b7b7!important}.preferences-content,.preferences-label,.preferences-options-checkbox-label{color:#e8e8e8!important}.preferences-av-select{color:#757575!important}');
	console.log("theme injected");
	themeInjected = true;
	console.log("eventListener removed")
	wv[0].removeEventListener("dom-ready", addCSS);
}

webview = document.getElementsByClassName('Webview');
webview[0].addEventListener("dom-ready", addCSS);
