const markdownInput = document.getElementById("markdown-input");
const preview = document.getElementById("preview") ;
const clearBtn = document.getElementById("clear-btn") ;

//update preview in real Time
markdownInput.addEventListener("input",()=>{
      const markdownText = markdownInput.value ;
      preview.innerHTML = marked.parse(markdownText) ;
})

//clear the text area and preview 
clearBtn.addEventListener("click",()=>{
    console.log("Hello") ;
    markdownInput.value = "" ;
    preview.innerHTML = "" ;
})

// Initial sample Markdown
markdownInput.value = `# Heading 1
## Heading 2
**Bold** and *italic* text
[Link](https://example.com)
- Unordered list
1. Ordered list
\`inline code\`
\`\`\`
multi-line code block
\`\`\``;
preview.innerHTML = marked.parse(markdownInput.value) ;