import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-list-wiki',
  templateUrl: './list-wiki.component.html',
  styleUrls: ['./list-wiki.component.css']
})
export class ListwikiComponent implements OnInit {

  wikiList: AngularFireList<any>;
  wikis: any[];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.wikiList = this.db.list('wikis');

    this.wikiList.snapshotChanges().pipe(map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    })).subscribe(items => {
      this.wikis = items;
    });
  }

}
