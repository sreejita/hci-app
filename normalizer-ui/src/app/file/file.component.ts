import { Component, OnInit } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  filetext = '';
  filecontents;
  constructor(private fileService: FileService,
              ) { }

  ngOnInit() {

  }
  postText() {
      this.fileService.postText('{"fileText":"' + this.filetext + '"}').subscribe(response => {
          console.log(response);
      });
  }
  getText() {
    this.fileService.getText().subscribe( (res: any) => {
      this.filecontents = res.filecontents;

    });
  }

}
