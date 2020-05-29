import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { config } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CVComponent implements OnInit {

  uploadText: any;
  downloadText: any;
  fileTransfert: FileTransferObject;
  constructor(private transfer: FileTransfer, private file: File, private path: FilePath, private chooser: FileChooser) 
  {
    this.uploadText = "";
    this.downloadText = "";
   }

   UploadFile(){
     this.chooser.open().then((uri)=>{
      this.path.resolveNativePath(uri).then((nativepath)=>{
        this,this.fileTransfert = this.transfer.create();
        let options: FileUploadOptions={
          fileKey:'file',
          fileName:'cv.pdf',
          chunkedMode:false,
          headers:{},
          mimeType:'pdf'
        }
        this.uploadText = "uploading..."
        //this.fileTransfert.upload(nativepath, )
      },(err)=>{
        alert(JSON.stringify(err));
      })
     },(err)=>{
       alert(JSON.stringify(err));
     })
   }

  ngOnInit() {}

}
