<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\NewsletterController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/emailContactForm', [EmailController::class, 'send']);
Route::post('/newsletter', [NewsletterController::class, 'store']);


Route::post('/test', [NewsletterController::class, 'index']);