import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-wiki',
  templateUrl: './add-wiki.component.html',
  styleUrls: ['./add-wiki.component.css']
})
export class AddWikiComponent implements OnInit {

  wiki:any = {};
  title:string = "Add Wiki";
  id;

  constructor(private db:AngularFireDatabase
    , private route:ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get("id");

    if(this.id) {
      this.title = "Edit Wiki";
      this.getWikiByKey(this.id);
    }
  }

  addWiki(data:NgForm) {
    // console.log(data.value);
    if (this.id) {
      this.db.list("wikis").update(this.id, data.value);

    } else {
      this.db.list("wikis").push(data.value);
    }    
  }

  getWikiByKey(id) {
    this.db.object("/wikis/"+id).snapshotChanges().pipe(map(res => {
      return res.payload.val();
    })).subscribe(items => {
        this.wiki = items;
    });
  }

}
