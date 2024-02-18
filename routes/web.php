<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\reportappointController;
use App\Http\Controllers\reportsalarymainController;
use App\Http\Controllers\reportsalarysubController;
use App\Http\Controllers\reportvisitmainController;
use App\Http\Controllers\reportvisitsubController;
use App\Http\Controllers\testController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/appointexport', [reportappointController::class, 'exportappoint'])->name('appointexport');
Route::post('/appointreport', [reportappointController::class, 'reportappoint'])->name('appointreport');
Route::post('/exportvisitmain', [reportvisitmainController::class, 'exportvisitmain'])->name('exportvisitmain');
Route::post('/reportvisitmain', [reportvisitmainController::class, 'reportvisitmain'])->name('reportvisitmain');
Route::post('/exportvisitsub', [reportvisitsubController::class, 'exportvisitsub'])->name('exportvisitsub');
Route::post('/reportvisitsub', [reportvisitsubController::class, 'reportvisitsub'])->name('reportvisitsub');
Route::post('/reportsalarymain', [reportsalarymainController::class, 'reportsalarymain'])->name('reportsalarymain');
Route::post('/exportsalarymain', [reportsalarymainController::class, 'exportsalarymain'])->name('exportsalarymain');
Route::post('/reportsalarysub', [reportsalarysubController::class, 'reportsalarysub'])->name('reportsalarysub');
Route::post('/exportsalarysub', [reportsalarysubController::class, 'exportsalarysub'])->name('exportsalarysub');

Route::any('/testpage2', [testController::class, 'testpage'])->name('testpage2');

Route::get('/testpage', function () {
    return view('testpage');
})->name('testpage');

Route::get('/exportvisitopd', function () {
    return view('main.exportvisitopd');
})->name('exportvisitopd');
Route::get('/exportappointmain', function () {
    return view('main.exportappointmain');
})->name('exportappointmain');
Route::get('/exportappointsub', function () {
    return view('main.exportappointsub');
})->name('exportappointsub');
Route::get('/exportsalarymain', function () {
    return view('main.exportsalarymain');
})->name('exportsalarymain');
Route::get('/exportsalarysub', function () {
    return view('main.exportsalarysub');
})->name('exportsalarysub');

Route::get('/reportvisitopdsearch', function () {
    return view('main.reportvisitopdsearch');
})->name('reportvisitopdsearch');
Route::get('/reportvisitopdsubsearch', function () {
    return view('main.reportvisitopdsubsearch');
})->name('reportvisitopdsubsearch');
Route::get('/reportappointmainsearch', function () {
    return view('main.reportappointmainsearch');
})->name('reportappointmainsearch');
Route::get('/reportappointsubsearch', function () {
    return view('main.reportappointsubsearch');
})->name('reportappointsubsearch');
Route::get('/reportsalarymainsearch', function () {
    return view('main.reportsalarymainsearch');
})->name('reportsalarymainsearch');
Route::get('/reportsalarysubsearch', function () {
    return view('main.reportsalarysubsearch');
})->name('reportsalarysubsearch');