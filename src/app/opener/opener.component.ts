import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-opener',
  templateUrl: './opener.component.html',
  styleUrls: ['./opener.component.css']
})
export class OpenerComponent implements OnInit {
  private popupWindow: Window | null = null;

  constructor(private window: Window, private toastr: ToastrService) { }

  ngOnInit() {
    const appWindow = this.window as AppWindow;
    appWindow.app = appWindow.app || {};
    appWindow.app.notifications = {
      show: (type: 'success' | 'failure', message: string, title: string) => {
        switch (type) {
          case 'success': this.toastr.success(message, title); break;
          case 'failure': this.toastr.error(message, title); break;
        }
        this.popupWindow?.close();
      }
    };
  }

  openPopup() {
    this.popupWindow = this.window.open('assets/popup/popup.html', 'PopupWindow', 'resizable,scrollbars');
    if (this.popupWindow) {
      this.toastr.info('Opened popup window');
    } else {
      this.toastr.warning('Open popup window failed');
    }
  }
}

interface AppWindow extends Window {
  app: any
}
