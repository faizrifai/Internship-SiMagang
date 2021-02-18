import 'package:flutter/material.dart';
import 'package:flutter_application_1/constants.dart';
import 'package:flutter_application_1/date_picker.dart';

class LoginPage extends StatelessWidget {
  // final String title;

  // const LoginPage({Key key, this.title}) : super(key: key);
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: ColorPalette.primaryColor,
        padding: EdgeInsets.all(20.0),
        child: ListView(
          children: <Widget>[
            Center(
              child: Column(
                children: <Widget>[
                  _iconLogin(),
                  _titleDescription(),
                  _textField(),
                  date(),
                  _textField2(),
                  _buildButton(context),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _iconLogin() {
    return Image.asset(
      "assets/images/logo.png",
      width: 150.0,
      height: 150.0,
    );
  }

  Widget _titleDescription() {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.only(top: 16.0),
        ),
        Text(
          "Selamat Datang Peserta Intership",
          style: TextStyle(
            color: Color(0xff081530),
            fontSize: 16.0,
          ),
        ),
        Padding(
          padding: EdgeInsets.only(top: 12.0),
        ),
        Text(
          "Kami Menghimbau isi Dengan Teliti Sebelum Di Serahkan. Selamat Mengisi. Terima Kasih",
          style: TextStyle(
            fontSize: 12.0,
            color: Color(0xff081530),
          ),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }

  Widget _textField() {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.only(top: 12.0),
        ),

        // Nama Lengkap
        TextFormField(
          decoration: const InputDecoration(
            border: UnderlineInputBorder(),
            enabledBorder: UnderlineInputBorder(
              borderSide: BorderSide(
                color: ColorPalette.underlineTextField,
                width: 1.5,
              ),
            ),
            focusedBorder: UnderlineInputBorder(
              borderSide: BorderSide(
                color: Color(0xff081530),
                width: 2.0,
              ),
            ),
            hintText: "Nama Lengkap",
            hintStyle: TextStyle(color: ColorPalette.hintColor),
          ),
          style: TextStyle(color: Color(0xff081530)),
          autofocus: false,
        ),
        Padding(
          padding: EdgeInsets.only(top: 12.0),
        ),

        // No. HP
        TextFormField(
          decoration: const InputDecoration(
            border: UnderlineInputBorder(),
            enabledBorder: UnderlineInputBorder(
              borderSide: BorderSide(
                color: ColorPalette.underlineTextField,
                width: 1.5,
              ),
            ),
            focusedBorder: UnderlineInputBorder(
              borderSide: BorderSide(
                color: Color(0xff081530),
                width: 2.0,
              ),
            ),
            hintText: "No. Hp",
            hintStyle: TextStyle(color: ColorPalette.hintColor),
          ),
          keyboardType: TextInputType.numberWithOptions(decimal: true),
          style: TextStyle(color: Color(0xff081530)),
          autofocus: false,
        ),
        Padding(
          padding: EdgeInsets.only(top: 12.0),
        ),

        // Tempat Lahir
        TextFormField(
          decoration: const InputDecoration(
            border: UnderlineInputBorder(),
            enabledBorder: UnderlineInputBorder(
              borderSide: BorderSide(
                color: ColorPalette.underlineTextField,
                width: 1.5,
              ),
            ),
            focusedBorder: UnderlineInputBorder(
              borderSide: BorderSide(
                color: Color(0xff081530),
                width: 2.0,
              ),
            ),
            hintText: "Tempat Lahir",
            hintStyle: TextStyle(color: ColorPalette.hintColor),
          ),
          style: TextStyle(color: Color(0xff081530)),
          autofocus: false,
        ),
        Padding(
          padding: EdgeInsets.only(top: 12.0),
        ),
      ],
    );
  }

  Widget date() {
    return Column(
      children: <Widget>[
        Container(
          padding: EdgeInsets.fromLTRB(0, 15.0, 0, 0),
          child: MyTextFieldDatePicker(
            labelText: "Tanggal Lahir",
            prefixIcon: Icon(Icons.date_range),
            suffixIcon: Icon(Icons.arrow_drop_down),
            lastDate: DateTime.now().add(Duration(days: 366)),
            firstDate: DateTime(1970),
            initialDate: DateTime.now(),
            onDateChanged: (selectedDate) {
              // Aksi yang diperlukan saat mengganti kalender
            },
          ),
        ),
      ],
    );
  }

  Widget _textField2() {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.only(top: 12.0),
        ),
        //isi sini ntar
      ],
    );
  }

  Widget _buildButton(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.only(top: 16.0),
        ),
        InkWell(
          child: Container(
            padding: EdgeInsets.symmetric(vertical: 8.0),
            width: double.infinity,
            child: Text(
              'Selesai',
              style: TextStyle(color: ColorPalette.hintColor),
              textAlign: TextAlign.center,
            ),
            decoration: BoxDecoration(
              color: Color(0xfff8b600),
              borderRadius: BorderRadius.circular(30.0),
            ),
          ),
        ),
      ],
    );
  }
}
