<html>
<head>

</head>
<body>
<form action="/register" method="POST">
    @csrf
    <input type="text" name="email" placeholder="email">
    <input type="text" name="name" placeholder="name">
    <input type="text" name="password" placeholder="password">
    <input type="text" name="password_confirmation"  placeholder="password_confirmation">
    <input type="text" name="age" placeholder="age">
    <input type="text" name="gender" placeholder="gender">
{{--    <input type="text">--}}
{{--    <input type="text">--}}
{{--    --}}
{{--    --}}
{{--    <input type="text">--}}
    <button type="submit">submit</button>
</form>
</body>
</html>
