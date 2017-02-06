;(function(window) {

        var urlPattern = /^(?:https?|file|c):(?:\/{1,3}|\\{1})[-a-zA-Z0-9:;,@#%&()~_?\+=\/\\\.]*$/;

        XBBCODE.addTags(   
            {
            "jumpto": {
                openTag: function(params,content) {
                    var url = (params) ? params.replace(/=/g, '') : '';
                    return '<a href="#'+url+'">';
                },
                closeTag: function(params,content) {
                    return '</a>';
                }
            },
            "indent": {
                openTag: function(params,content) {
                    return '<div style="margin-left:40px">';
                },
                closeTag: function(params,content) {
                    return '</div>';
                }
            },
            "anchor": {
                openTag: function(params, content){
                    return '<a name="'+content+'">';
                },
                closeTag: function(params, content){
                    return '</a>';
                },
                displayContent: false
            },
            "blizzquote": {
                openTag: function(params, content){
                    return '<div class="blizz_container"> <div class="blizz_icon">Originally Posted by Blizzard Entertainment</div>';
                },
                closeTag: function(params, content){
                    return '</div>';
                }
            },
            "collapse":{
                openTag: function(params, content){
                    var newID =  Math.ceil(Math.random()*30000);
                    return '<a href="#" class="ExpandBtn">Expand</a><div class="expand">';
                },
                closeTag: function(params, content){
                    return '</div>';
                }
            },
            "color": {
                openTag: function(params, content){
                     var param = (params) ? params.replace(/="/g, '') : '';
                    return '<span style="color: '+param+'" >';
                },
                closeTag: function(params, content){
                    return '</span>';
                }
            },
            "left": {
                openTag: function(params, content){
                     var param = (params) ? params.replace(/="/g, '') : '';
                    return '<div style="float: left" >';
                },
                closeTag: function(params, content){
                    return '</div><span class="clearfix"></span><br/>';
                }
            },
            "right": {
                openTag: function(params, content){
                     var param = (params) ? params.replace(/="/g, '') : '';
                    return '<div style="float: right" >';
                },
                closeTag: function(params, content){
                    return '</div><span class="clearfix"></span><br/>';
                }
            },
            "center": {
                openTag: function(params, content){
                     var param = (params) ? params.replace(/="/g, '') : '';
                    return '<center>';
                },
                closeTag: function(params, content){
                    return '</center>';
                }
            },
            "b": {
                openTag: function(params, content){
                     var param = (params) ? params.replace(/="/g, '') : '';
                    return '<em>';
                },
                closeTag: function(params, content){
                    return '</em>';
                }
            },
            "i": {
                openTag: function(params, content){
                     var param = (params) ? params.replace(/="/g, '') : '';
                    return '<i>';
                },
                closeTag: function(params, content){
                    return '</i>';
                }
            },
            "u": {
                openTag: function(params, content){
                     var param = (params) ? params.replace(/="/g, '') : '';
                    return '<u>';
                },
                closeTag: function(params, content){
                    return '</u>';
                }
            },
            "url": {
                openTag: function(params, content){
                var myUrl;

                if (!params) {
                    myUrl = content.replace(/<.*?>/g, "");
                } else {
                    myUrl = params.substr(1);
                }

                urlPattern.lastIndex = 0;
                if (!urlPattern.test(myUrl)) {
                   myUrl = myUrl.replace(/"/g, '')
                }

                return '<a href="' + myUrl + '">';
                },
                closeTag: function(params, content){
                    return '</a>';
                }
            }
        }
        );
})(window);