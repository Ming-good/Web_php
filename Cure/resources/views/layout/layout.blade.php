<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <script src="assets/js/jquery-3.4.1.min.js"></script>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"/>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>
        <link rel="stylesheet" href="assets/css/main.css" />
    </head>
<body>
@yield('content')
</body>
</html>
