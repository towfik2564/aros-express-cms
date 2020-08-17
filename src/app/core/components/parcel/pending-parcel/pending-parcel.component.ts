import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/core/http/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pending-parcel',
  templateUrl: './pending-parcel.component.html',
  styleUrls: ['./pending-parcel.component.scss']
})
export class PendingParcelComponent implements OnInit {
  pendings

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pendings = this.route.snapshot.data.parcels
  }

  getPaginatedData(query) {
    this.api.getAllPendingParcels(query).subscribe(data => this.pendings = data)
  }

}
