
        function hapus(){
            var result = confirm("are you want to delete Bicycle TDR 2000");
            if(result==false){
                event.preventDefault()
            }
        }
        function edit(){
            let text;
            var product=prompt("Edit Product","Bicycle TDR 2000")
            var harga=prompt("150")
            var gambar=prompt("www.google.com")
             
            if ( product==null || product=="" || harga==null || harga=="" || gambar==null || gambar==""){text=" are you cancel edit ?"}
            else {text="ok you have edit product"+product+" with price "+harga+" "}

        }

        function baru(){
            let txt;
            var newProduct=prompt("Name Product","Bicycle TDR 2000")
            var newPrice=prompt("150")
            var newPicture=prompt("www.google.com")
             
            if ( newProduct==null || newProduct=="" || newPrice==null || newPrice=="" || newPicture==null || newPicture==""){text=" are you cancel edit ?"}
            else {txt="ok you have edit product"+newProduct+" with price "+newPrice+" "}

        }