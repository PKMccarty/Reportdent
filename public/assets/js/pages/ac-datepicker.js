'use strict';
$(document).ready(function() {
    $('#d_week').datepicker({
        daysOfWeekDisabled: "2"
    });
    $('#d_highlight').datepicker({
        daysOfWeekHighlighted: "1"
    });
    $('#d_auto').datepicker({
        autoclose: true
    });
    $('#pickerstart').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerend').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerreportstart').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerreportend').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerexportsalarystart').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerexportsalaryend').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerreportsalarymainstart').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerreportsalarymainend').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerexportsaralysubstart').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerexportsaralysubend').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerreportsaralysubstart').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerreportsaralysubend').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });

    $('#pickerexportvisitsmainstart').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerexportvisitsmainend').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerreportvisitsmainstart').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerreportvisitsmainend').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });

    $('#pickerexportvisitssubstart').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerexportvisitssubend').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerreportvisitssubstart').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });
    $('#pickerreportvisitssubend').datepicker({
        autoclose: true,format: 'yyyy-mm-dd'
    });

    $('#d_disable').datepicker({
        datesDisabled: ['10/15/2018', '10/16/2018', '10/17/2018', '10/18/2018']
    });
    $('#d_toggle').datepicker({
        keyboardNavigation: false,
        forceParse: false,
        toggleActive: true
    });
    $('#d_today').datepicker({
        keyboardNavigation: false,
        forceParse: false,
        todayHighlight: true
    });
    $('#disp_week').datepicker({
        calendarWeeks: true
    });
    $('#datepicker_range').datepicker({});
});
