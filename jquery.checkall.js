/*----------------------------------------------------  
    CheckAll plugin for jQuery
    Version: 1.3

    Copyright (c) 2011 Matt Ball
    
    June 14, 2011

    Requires: jQuery 1.4.2+
------------------------------------------------------*/

(function($)
{
    $.fn.checkAll = function (group, options)
    {
        var opts = $.extend({}, $.fn.checkAll.defaults, options),
            $master = this,
        
            $slaves = $(group), // take a selector or a jQuery
            selector = $slaves.selector,
            groupSize = $slaves.length,
            onClick = typeof opts.onClick === 'function' ? opts.onClick : null,
            onMasterClick = typeof opts.onMasterClick === 'function' ? opts.onMasterClick : null,
            reportTo = typeof opts.reportTo === 'function' ? opts.reportTo : null,
            
            // for compatibility with 1.4.2 through 1.6
            propFn = typeof $.fn.prop === 'function' ? 'prop' : 'attr';
        
        if (groupSize === 0)
        {
            // this is kind of a problem
            groupSize = -1;
        }
        
        function _countChecked()
        {
            return $slaves.filter(':checked').length;
        }
            
        function _autoEnable()
        {
            var numChecked = _countChecked();
            $master[propFn]('checked', groupSize === numChecked);
            if (reportTo)
            {
                reportTo(numChecked);
            }
        }
            
        function _autoDisable()
        {
            $master[propFn]('checked', false);
            if (reportTo)
            {
                reportTo(_countChecked());
            }
        }
        
        $master.unbind('click.checkAll').bind('click.checkAll', function (e)
        {
            var check_val = e.target.checked;
            $slaves.add($master)[propFn]('checked', check_val);
            
            if (onMasterClick)
            {
                onMasterClick.apply(this);
            }
            
            if (reportTo)
            {
                reportTo(check_val ? _countChecked() : 0);
            }
        });

        
        if (opts.sync)
        {
            $(selector).die('click.checkAll').live('click.checkAll', function ()
            {
                this.checked ? _autoEnable() : _autoDisable();
                
                if (onClick)
                {
                    onClick.apply(this);
                }
            });
        }
        
        _autoEnable();
        
        return this;
    };
    
    $.fn.checkAll.defaults = {sync: true};
}(jQuery));
        