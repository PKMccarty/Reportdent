<!DOCTYPE html>
<html lang="en">

<head>
    <title>Dashboard ทันตกรรม</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    @vite(['resources/js/app.js'])
    <link rel="icon" href="{{ asset('assets/images/favicon.ico') }}" type="image/x-icon">
    <link rel="stylesheet" href="{{ asset('assets/fonts/fontawesome/css/fontawesome-all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/plugins/animation/css/animate.min.css') }}">
    <link rel="stylesheet"
        href="{{ asset('assets/plugins/bootstrap-datetimepicker/css/bootstrap-datepicker3.min.css') }}">
    <script type="0238d9d313cca223882bcbdf-text/javascript">
		var page = {
            bootstrap: 3
        };

        function swap_bs() {
            page.bootstrap = 3;
        }
    </script>
    <style>
        .datepicker>.datepicker-days {
            display: block;
        }

        ol.linenums {
            margin: 0 0 0 -8px;
        }
    </style>

    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/pages/pages.css') }}">
</head>

<body class>

    <div class="loader-bg">
        <div class="loader-track">
            <div class="loader-fill"></div>
        </div>
    </div>
    @include('layouts.menu')
    @include('layouts.navbar')
    <div class="pcoded-main-container">
        <div class="pcoded-wrapper">
            <div class="pcoded-content">
                <div class="pcoded-inner-content">
                    <div class="main-body">
                        <div class="page-wrapper">
                            @include('layouts.header')
                            @yield('content')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="{{asset('assets/js/vendor-all.min.js')}}" type="0238d9d313cca223882bcbdf-text/javascript"></script>
    <script src="{{asset('assets/plugins/bootstrap/js/bootstrap.min.js')}}" type="0238d9d313cca223882bcbdf-text/javascript"></script>
    <script src="{{asset('assets/js/pcoded.min.js')}}" type="0238d9d313cca223882bcbdf-text/javascript"></script>
    <script src="{{asset('assets/plugins/jquery-ui/js/jquery-ui.js')}}" type="081168c2da4c4eba92ae89ec-text/javascript"></script>
    <script src="{{asset('assets/plugins/bootstrap-datetimepicker/js/bootstrap-datepicker.min.js')}}" type="0238d9d313cca223882bcbdf-text/javascript"></script>
    <script src="{{asset('assets/js/pages/ac-datepicker.js')}}" type="0238d9d313cca223882bcbdf-text/javascript"></script>
    <script src="{{asset('assets/plugins/sweetalert/js/sweetalert.min.js')}}" type="37df7aa1f84b1dceaeb24f46-text/javascript"></script>
<script src="{{asset('assets/js/pages/ac-alert.js')}}" type="37df7aa1f84b1dceaeb24f46-text/javascript"></script>
    <script src="{{ asset('assets/js/rocket.js') }}" data-cf-settings="0238d9d313cca223882bcbdf-|49" defer></script>
    <script src="{{asset('assets/js/rocket.js')}}" data-cf-settings="37df7aa1f84b1dceaeb24f46-|49" defer></script>
</body>
</html>
