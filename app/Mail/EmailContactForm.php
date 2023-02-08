<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class EmailContactForm extends Mailable
{
    use Queueable, SerializesModels;

    public $mailData;
    public function __construct($data)
    {
        $this->mailData = $data;
    }

    public function envelope()
    {
        return new Envelope(
            subject: 'New email received from contactForm on danfit',
        );
    }

    public function content()
    {
        return new Content(
            view: 'emails/email-user-form-email',
        );
    }

    public function attachments()
    {
        return [];
    }
}
