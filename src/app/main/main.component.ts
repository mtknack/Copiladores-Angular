import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { basicSetup } from 'codemirror';
import { EditorState } from "@codemirror/state"
import { java } from '@codemirror/lang-java';
import { EditorView } from '@codemirror/view';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {
  
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const codeMirrorOptions = {
      lineNumbers: true,
      language: java(),
      ...basicSetup
    };

    const codeMirrorTextArea = this.el.nativeElement.querySelector('#codigo');
    const editorState = EditorState.create({
      doc: codeMirrorTextArea.value,
      extensions: [basicSetup, java()]
    });

    const editorViewConfig = {
      state: editorState,
      parent: codeMirrorTextArea
    };

    const editor = new EditorView(editorViewConfig);

    editor.dom.addEventListener('input', () => {
      codeMirrorTextArea.value = editor.state.doc.toString();
    });
  }
}
