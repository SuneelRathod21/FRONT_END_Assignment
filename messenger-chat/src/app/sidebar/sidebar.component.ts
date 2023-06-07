import { Component, EventEmitter,Output,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  public conversations = [
    {name: "daksh", time:"8:50", latestMessage: "Good Morning!" , latestMessageRead: false, },
    {name: "Faraz", time:"8:59", latestMessage: "hello!" ,  latestMessageRead: true},
    {name: "Anzer", time:"9:21", latestMessage: "whats up!" , latestMessageRead: false},
    {name: "Praveen", time:"7:55", latestMessage: "Hey! how are u" , latestMessageRead: true},
    {name: "Suneel", time:"9:45", latestMessage: "Hello dear!" , latestMessageRead: true},
    {name: "Sanket", time:"6:01", latestMessage: "Nice buddy" , latestMessageRead: false},
    {name: "K K ", time:"1:11", latestMessage: "keep going on" , latestMessageRead: true},
    {name: "S S ", time:"1:11", latestMessage: "keep going on" , latestMessageRead: false},
    {name: "M M ", time:"1:11", latestMessage: "keep going on" , latestMessageRead: true},
    {name: "Y Y ", time:"1:11", latestMessage: "keep going on" , latestMessageRead: false},
    {name: "W W ", time:"1:11", latestMessage: "keep going on" , latestMessageRead: true},
    {name: "Z Z ", time:"1:11", latestMessage: "keep going on" , latestMessageRead: false},
  ]

  searchQuery: string = '';

  constructor() { }
  onConversationClick() {
    this.conversationClicked.emit(this.conversations);
  }

  ngOnInit(): void {
  }

  
}
