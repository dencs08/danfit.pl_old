<?php

namespace App\Http\Controllers;

use App\Models\Newsletter;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function index(Request $request)
    {
        return $request;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $email = $request->input('email');

        $existing = Newsletter::where('email', $email)->first();
        if($existing){
            return 'Email already subscribed to the newslettter';
        }
    
        $newsletter = new Newsletter();
        $newsletter->email = $email;
        $newsletter->save();
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
