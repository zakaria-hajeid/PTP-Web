import { IdentityService } from 'src/app/Shared/service/IdentityService/IdentityService';
import { Injectable } from "@angular/core";
import { DefaultHttpClient, HttpRequest, HttpResponse, HubConnection, HubConnectionBuilder, IHttpConnectionOptions, MessageHeaders  } from "@microsoft/signalr";

class CustomHttpClientz extends DefaultHttpClient {

  public send(request: HttpRequest): Promise<HttpResponse> {
    request.headers = { ...request.headers, "Access-Control-Allow-Origin": "*" };
    return super.send(request);
  }
}

@Injectable()
export class signalRservices {
  private userRegisterResponse;
  constructor(private IdentityService:IdentityService){

  }


  private hubConnection: HubConnection
    public startConnection = () => {
      debugger;

let MessagehEADERS:MessageHeaders= {'Access-Control-Allow-Origin':'*','mode':'no-cors'
,'Access-Control-Allow-Credentials':'false'

};

    this.hubConnection = new HubConnectionBuilder()
                              .withUrl('https://localhost:44306/userHub')

                              .build();
      this.hubConnection
        .start()
        .then(() => console.log('Connection started'))
        .catch(err => console.log('Error while starting connection: ' + err))

    }
    //handler after call the event

    public addUserRegisterEventTOallSubscriber = () => {
      this.hubConnection.on('RegisterUserevent', (data) => {
        debugger;
     return data;
      });
    }
        // rais an event to all subsciber

    public ReigsteruserAddEvent = (data) => {

      this.hubConnection.invoke('RegisterUser', data)
      .catch(err => console.error(err));
    }


}
