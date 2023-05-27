<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
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
    <div id="app"></div>
    <script src="{{ asset('public/dist/js/app.js') }}"></script>

</body>

</html>
