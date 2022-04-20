<html>
<head>

</head>
<body>
<form action="/login" method="POST">
    @csrf
    <input type="text" name="email" placeholder="email">

    <input type="text" name="password" placeholder="password">


{{--    <input type="text">--}}
{{--    <input type="text">--}}
{{--    --}}
{{--    --}}
{{--    <input type="text">--}}
    <button type="submit">submit</button>
</form>
</body>
</html>
