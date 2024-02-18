<!DOCTYPE html>
<html>
<head>
    <title>Show Data</title>
</head>
<body>
    <h1>Data from API</h1>
    <ul>
        
        <form action="{{route('testpage2')}}" method="post">
            @csrf
            <input type="date" name="pickerstart" id="pickerstart">
            <input type="date" name="pickerend" id="pickerend">
            <input type="submit" value="submit">
        </form>
        
       
    </ul>
</body>
</html>
