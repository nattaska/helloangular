import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list-wiki',
  templateUrl: './list-wiki.component.html',
  styleUrls: ['./list-wiki.component.css']
})
export class ListwikiComponent implements OnInit {

  wikiList: AngularFireList<any>;
  wikis: any[];

  constructor(private db: AngularFireDatabase,
    private router: Router) { }

  ngOnInit() {
    this.wikiList = this.db.list('wikis');

    this.wikiList.snapshotChanges().pipe(map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    })).subscribe(items => {
      this.wikis = items;
    });
  }

  delWiki(data) {
    console.log(data);
    this.wikiList.remove(data.key);
  }

  editWiki(data) {
    this.router.navigate([`/editWiki/${data.key}`]);
  }

}
