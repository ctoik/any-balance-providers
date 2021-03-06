﻿function Reblaze(_url){
    var _AnyBalance = AnyBalance;
    var headers = addHeaders(g_headers, {Referer: _url});

    function Location(){
        function reload(){
            if(_window.onunload)
                _window.onunload();
        }
        
        return {
            href: _url,
            reload: reload
        }
    }

    var _window = {
        location: Location(),
        document: _document,
        navigator: _navigator,
        screen: _screen,
        sessionStorage: {},
        localStorage: {},
        indexedDB: {},
        openDatabase: function () {},
        frames: {},
        length: 0,
        pageYOffset: 0,
        pageXOffset: 0,
        innerWidth: 1920,
        innerHeight: 800,
        outerWidth: 1920,
        outerHeight: 1040,
        Image: function () {},
        status: '',
        name: '',
        screenY: 0,
        screenX: 0,
    };

    function _Element(tag, attrs, children){

      	var m_children = children || [];
      	var m_href;

        var obj = {
            getContext: function(str){
                return {
                    fillRect: function(x, y, width, height) {
                        return {};
                    },
                    
                    fillText: function(text, x, y, maxWidth) {
                        return {};
                    }
                };
            },
            
            toDataURL: function(){
                return 'data:image/png;base64,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';
            },
        };

        for(var name in attrs){
        	obj[name] = attrs[name];
        }

        return obj;
    }

    var _document = {
        get cookie(){
            var cookies = _AnyBalance.getCookies();
            var domain = getHostname();
            var cookies_str = cookies.reduce(function(previousValue, currentValue){
                if(endsWith(currentValue.domain, domain)){
        		    if(previousValue)
        		    	previousValue += ';';
        		    previousValue += currentValue.name + '=' + currentValue.value;
        		}
        		return previousValue;
        	}, '');
        	return cookies_str;
        },
        set cookie(info){
        	var path = getParam(info, null, null, /\bpath=([^;]*)/i);
        	var nameval = getParam(info, null, null, /^[^;]*/).match(/([^=]*)=(.*)/);
        	_AnyBalance.setCookie(getHostname(), nameval[1], nameval[2], {path: path});
        },

        createElement: function(tag){
            return _Element(tag);
        },

        window: _window
    };
    _window.document = _document;

    function getHostname(){
        return getParam(_url, /^https?:\/\/([^\/]*)/i);
    }

    function getBaseurl(url){
        return getParam(url || _url, /^(https?:\/\/[^\/]*)/i);
    }

    function getPath(){
        return getParam(_url, /^https?:\/\/[^\/]*(\/?[^\?]*)/i);
    }

    function createPlugin(plugin, mimes){
        var lplugin = [];
        for(var prop in plugin)
            lplugin[prop] = plugin[prop];
        for(var i=0; i<mimes.length; ++i){
            mimes[i].enabledPlugin = lplugin;
            lplugin.push(mimes[i]);
        }
        return lplugin;
    }

    var _navigator = {
        vendor: 'Google Inc.',
        appName: 'Netscape',
        language: 'ru',
        platform: 'Win32',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
        plugins: [
            createPlugin({description: "Version 5.38.5.0", filename: "npo1d.dll", name: "Google Talk Plugin Video Renderer"}, [{description: "Google Talk Plugin Video Renderer", suffixes: "o1d", type: "application/o1d"}]),
            createPlugin({description: "Windows Activation Technologies Plugin for Mozilla", filename: "npWatWeb.dll", name: "Windows Activation Technologies"}, [{description: "Windows Activation Technologies", suffixes: "", type: "application/mozilla-wat-scriptable-plugin-11"}])
        ]
    }
    _window.navigator = _navigator;

    var _screen = {
        availHeight: 1040,
        availLeft: 0,
        availTop: 0,
        availWidth: 1920,
        colorDepth: 24,
        height: 1080,
        pixelDepth: 24,
        width: 1920,
    }
    _window.screen = _screen;
    
    var _rbzns = {}
    _window.rbzns = _rbzns;

    function isReblazed(html){
        return /window.rbzns/.test(html);
    }

    function executeScript(html){
        var paramNames = "window,document,navigator,screen,location,parent,rbzns,frames,length,pageYOffset,pageXOffset,innerWidth,innerHeight,outerWidth,outerHeight,Image,status,name,screenY,screenX";
        var paramValues = [_window,_document,_navigator,_screen,_window.location,_window,_rbzns,_window.frames,_window.length,_window.pageYOffset,_window.pageXOffset,_window.innerWidth,_window.innerHeight,_window.outerWidth,_window.outerHeight,_window.Image,_window.status,_window.name,_window.screenY,_window.screenX];

		var obfuscatedScript = sumParam(html, null, null, /<script(?:[^>](?!src\s*=))*>([\s\S]*?)<\/script>/ig, [/(?!window\.)rbzns\./g, 'window.rbzns.', /(?!window\.)winsocks\(/, 'window.winsocks('], null, create_aggregate_join('\n'));
        safeEval(obfuscatedScript, paramNames, paramValues);
        
        if (!_AnyBalance.getCookie('rbzid')) {
            throw new AnyBalance.Error('Не удалось получить куку rbzid от Reblaze');
        }
        
        html = AnyBalance.requestGet(_url, headers);

		if(_AnyBalance.getLevel() >= 9){
			_AnyBalance.setData('rbzid', _AnyBalance.getCookie('rbzid'));
			_AnyBalance.saveData();
		}
		
        return html;
    }

    _window.parent = _window;

    if(_AnyBalance.getLevel() >= 9){
   		_AnyBalance.setCookie(getHostname(), 'rbzid', _AnyBalance.getData('rbzid'));
   	}

    return {
        document: _document,
        window: _window,

        isReblazed: isReblazed,
        executeScript: executeScript
    };
}