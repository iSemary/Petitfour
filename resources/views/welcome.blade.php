<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ env('APP_PRODUCTION_NAME') }}</title>
    <link rel="stylesheet" href="{{ asset('static/css/style.css') }}?v=1.0">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">
    {{-- Google Analytics Script --}}
    @if (isset($config['system']['google_analytics_id']))
        <script async src="https://www.googletagmanager.com/gtag/js?id={{ $config['system']['google_analytics_id'] }}"></script>
        <script>
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }
            let gAnalyticsID = `{{ $config['system']['google_analytics_id'] }}`
            gtag('js', new Date());
            gtag('config', gAnalyticsID);
        </script>`
    @endif

</head>

<body>
    <div id="root"></div>
    <script src="{{ asset('static/js/app.js') }}?v=1.0"></script>

</body>

</html>
