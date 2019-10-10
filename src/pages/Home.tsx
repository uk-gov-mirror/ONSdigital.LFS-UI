﻿import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { ONSPanel } from '../components/ONSPanel';
import { ONSTextInput } from '../components/ONSTextInput';
import { ONSInDevBanner } from '../components/ONSInDevBanner';
import { ONSUpload } from '../components/ONSUpload';

export class Home extends Component{
  displayName = Home.name
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <p>Hello</p>
        <ONSPanel label="This is the Dashboard" status="info" spacious={true}>
          <p>This is the Dashboard</p>
        </ONSPanel>
        <ONSPanel label="You got to the Dashboard" status="success">
          <p>You got to the Dashboard</p>
        </ONSPanel>
        <ONSPanel label="" status="error">
          <p>Nothing Loaded</p>
        </ONSPanel>
        <ONSPanel label="" status="error" header="Oh No">
          <p>Nothing Loaded</p>
        </ONSPanel>

        <ONSTextInput label="Text Input" placeholder="Type here ...." />

        <ONSUpload label="Upload CSV" description="File types accepted are .csv" fileName="file" fileID="file"/> 
      </div>
      
    );
  }
}
