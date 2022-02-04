function objek() {
  var pegawai ={
    nama : "bambang",
    umur : 55,
    np : "7887",
    gaji : 50000000,
  }
  console.log(pegawai)
  pegawai.masa_bakti=30;
  console.log(pegawai)

  for (var x in pegawai){
    console.log(pegawai[x]);
  }

}
objek();
