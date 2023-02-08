<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <style>
            @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&");
        </style>

        <title>Email bisonstudio</title>
    </head>
    <body>

    <body style="margin:0;margin: 0; padding: 0; min-width: 100%;">

    <center class="wrapper" style="width:100%;table-layout:fixed;background-color:#E6E6E6;padding-bottom:60px; padding-top:60px;">
      <table align="center" role="presentation" class="main" width="100%" style="border-spacing:0;width:100%;max-width:600px;background-color:#181818;font-family:sans-serif;color:#FFFFFF;box-shadow:0 0 25px rgba(0, 0, 0, 0.15);
                    border-spacing: 0;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    max-width: 600px;
                ;">
        <!-- BORDER -->
        <tr>
          <td height="12" class="wrong-email" style="padding:0;text-align:center;background-color: #383838;"></td>
        </tr>
        <!-- HERO -->
        <tr>
          <td class="hero" style="padding-left:25px;padding-right:25px;text-align:left;padding-bottom:50px; padding-top:50px;">
            <table role="presentation" width="100%" style="border-spacing:0;">
              <tr>
                <td style="padding:0;">
                    <p style="margin-bottom: 0; margin-top:0;">
                        <span style="text-transform: uppercase; color:#C0C0C0;">Imię: </span><span style="color:#FFFFFF;">{{ $mailData['name'] }}</span>
                      </p>
                      <p style='font-family:"Poppins", sans-serif; font-size:22px; color: #A3A3A3; margin-top:25px;'>Nazwisko: {{ $mailData['surname'] }}</p>
                    <p style="margin-bottom: 0; margin-top:0;">
                        <span style="text-transform: uppercase; color:#C0C0C0;">Email: </span><span style="color:#FFFFFF;">{{ $mailData['email'] }}</span>
                    </p>

                    <p style='font-family:"Poppins", sans-serif; font-size:22px; color: #A3A3A3; margin-top:25px;'>Telefon: {{ $mailData['phone'] }}</p>
                    
                    <p style='font-family:"Poppins", sans-serif; font-size:22px; color: #A3A3A3; margin-top:25px;'>Temat: {{ $mailData['subject'] }}</p>
                    <p style='font-family:"Poppins", sans-serif; font-size:22px; color: #A3A3A3; margin-top:25px;'>Wiadomość: {{ $mailData['message'] }}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- BORDER -->
        <tr>
          <td height="12" class="wrong-email" style="padding:0;text-align:center;background-color: #383838;"></td>
        </tr>
      </table>
    </center>
</html>
