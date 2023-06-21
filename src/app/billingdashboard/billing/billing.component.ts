import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BillingService } from 'src/app/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],

})
export class BillingComponent implements OnInit,AfterViewInit  {


  constructor(private billingService: BillingService) { }

  public items : ItemData[] = [];

  ngOnInit() {

    const item = this.billingService.getItems()
      .subscribe(data => {
        console.log(data);
        this.items = data
        console.log(item);
      });
  }

  displayedColumns = ['item', 'qty', 'prices'];
  dataSource = new MatTableDataSource<ItemData>(this.items);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


}

export interface ItemData {
  id: string;
  itemName: string;
  qty: string;
  price: string;
}