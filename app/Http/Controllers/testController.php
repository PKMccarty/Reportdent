<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;

class testController extends Controller
{
    //
    public function testpage(Request $request){

        $requestData = $request->all();
    
    $response = Http::get('http://192.168.5.133:8088/hosapi/ward.php', $requestData);

    $data = $response->getBody()->getContents();
    
    $request = json_decode($data);
    dd($request);
    return view('testpage2', compact('request'));
    }
}
