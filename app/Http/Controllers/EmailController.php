<?php

namespace App\Http\Controllers;

use App\Mail\EmailContactForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function send(Request $request)
    {
        $email = $request->email;
        // return $request;
        Mail::to('biuro@danfit.pl')->send(new EmailContactForm($request));

        return response()->json(['message' => 'Email sent successfully']);
    }
}
