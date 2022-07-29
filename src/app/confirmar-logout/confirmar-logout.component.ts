import { Component, OnInit } from '@angular/core';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material/tooltip';

@Component({
  selector: 'confirmar-logout',
  templateUrl: './confirmar-logout.component.html',
  styleUrls: ['./confirmar-logout.component.css']
})
export class ConfirmarLogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class TooltipModifiedDefaultsExample {}