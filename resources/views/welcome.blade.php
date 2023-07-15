<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ env('APP_PRODUCTION_NAME') }}</title>
    <meta name="description" content="Experienced software engineer with a strong aptitude for learning new technologies. Skilled in developing projects from inception to production, emphasizing clean and understandable code using robust frameworks. Flexible and adaptable approach to acquiring new skills.">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link href="https://abdelrahman.online/" rel="canonical">
    <link rel="manifest" href="manifest.json">
    <meta name="robots" content="index, follow">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0c001f">
    <meta name="theme-color" content="#0c001f">
    <meta name="view-type" content="{{ isset($_GET['t']) ? $_GET['t'] : 0 }}">
    <meta property="og:image" content={{ asset("og.jpg") }} />
    <link rel="stylesheet" href="{{ asset('static/css/style.min.css') }}?v={{ filemtime('static/css/style.min.css') }}">
</head>

<body>
    <div id="root"></div>
    <script src="{{ asset('static/js/app.min.js') }}?v={{ filemtime('static/js/app.min.js') }}"></script>
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
        </script>
    @endif
</body>

</html>
