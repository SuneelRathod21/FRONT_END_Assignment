import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedConversation: any;
  conversation:any;
  onConversationSelected(conversations: any) {
    // Handle conversation selection logic here
    this.selectedConversation = conversations;
    this.conversation = conversations;
  }
  }
