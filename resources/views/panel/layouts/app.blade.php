<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="description"
        content="A dynamic portfolio showcasing my work in web development. Browse through my projects, explore my skills and experience, and witness my creative expertise in design, development, and SaSS.">
    <meta name="author" content="Łukasz Holeczek">
    <meta name="keywords"
        content="Portfolio, Projects, Work samples, Skills, Experience, Professional achievements, Creative work, Design, Art, Photography, Web development, Graphic design, User experience, UI/UX design, Programming, Software development, Digital marketing, Branding, Illustration, Animation">
    <title>{{ env('APP_PANEL_NAME') }} | @yield('title')</title>
    <link rel="shortcut icon" href="{{ asset('assets/panel/images/icons/favicon.ico') }}" type="image/x-icon" />
    <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('assets/panel/images/icons/apple-icon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('assets/panel/images/icons/apple-icon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('assets/panel/images/icons/apple-icon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('assets/panel/images/icons/apple-icon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('assets/panel/images/icons/apple-icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('assets/panel/images/icons/apple-icon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('assets/panel/images/icons/apple-icon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('assets/panel/images/icons/apple-icon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180"
        href="{{ asset('assets/panel/images/icons/apple-icon-180x180.png') }}">
    <meta name="theme-color" content="#ffffff">
    {{-- CSS files --}}
    <link rel="stylesheet" href="{{ asset('assets/panel/vendors/fontawesome-free/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/panel/vendors/simplebar/css/simplebar.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/panel/css/vendors/simplebar.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/panel/vendors/DataTables/datatables.min.css') }}" media="screen">
    <link rel="stylesheet" href="{{ asset('assets/panel/vendors/select2/select2.min.css') }}" media="screen">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism.css">
    <link href="{{ asset('assets/panel/css/style.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/panel/css/custom.css') }}" rel="stylesheet">
</head>

<body>

    @auth
        @include('panel.layouts.sidebar')
        <div class="wrapper d-flex flex-column min-vh-100 bg-light">
            @include('panel.layouts.header')
            <div class="body flex-grow-1 px-3">
                <div class="container-lg">
                    @yield('content')
                </div>
            </div>
            @include('panel.layouts.footer')
        </div>
    @endauth
    @guest
        @yield('content')
    @endguest

    {{-- Js files --}}
    <script src="{{ asset('assets/panel/vendors/jquery/jquery-3.7.0.min.js') }}"></script>
    <script src="{{ asset('assets/panel/vendors/@coreui/coreui/js/coreui.bundle.min.js') }}"></script>
    <script src="{{ asset('assets/panel/vendors/DataTables/datatables.js') }}"></script>
    <script src="{{ asset('assets/panel/vendors/simplebar/js/simplebar.min.js') }}"></script>
    <!-- Plugins and scripts required by this view-->
    <script src="{{ asset('assets/panel/vendors/chart.js/js/chart.min.js') }}"></script>
    <script src="{{ asset('assets/panel/vendors/@coreui/chart.js/js/coreui-chartjs.js') }}"></script>
    <script src="{{ asset('assets/panel/vendors/@coreui/utils/js/coreui-utils.js') }}"></script>
    <script src="{{ asset('assets/panel/vendors/apexcharts/apexcharts.min.js') }}"></script>
    <script src="{{ asset('assets/panel/vendors/select2/select2.min.js') }}"></script>
    <script src="https://cdn.ckeditor.com/ckeditor5/37.1.0/classic/ckeditor.js"></script>
    <script src="{{ asset('assets/panel/js/main.js') }}"></script>

    @yield('scripts')
</body>

</html>
