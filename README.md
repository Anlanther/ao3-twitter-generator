# Ao3 Twitter Template Generator

![preview-image](public/app-preview.png)

This project was developed based on [starskin's Twitter Work Skin: Tweets & Profile (newest layout)](https://archiveofourown.org/works/26754208/chapters/65268931#main).

I fully recommend checking out their work to better understand how this is implemented, as well as get access to a detailed FAQ section.

## Detailed Usage Instructions

**Table of Contents:**

- [Step 1: Import Work Skin](#step-1---import-work-skin)
- [Step 2: Set the Work Skin for your Story](#step-2---set-the-work-skin-for-your-story)
- [Step 3: Use this App to Generate HTML](#step-3---use-this-app-to-generate-the-html-content-of-your-story)

### Step 1 - Import Work Skin (Copied from starskin's fic above on 9/2/26)

Go to `[My Dashboard] > [Skins] > [My Work Skins] > [Create Work Skin]`. Use any unique Work Skin name that works for you and then in the CSS area, paste this:

```css
#workskin .twt {
  float: center;
  max-width: 450px;
  min-width: 300px;
  margin: 0em auto;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Ubuntu,
    'Helvetica Neue',
    sans-serif;
}

#workskin .twt-header {
  overflow: hidden;
  margin-bottom: -3em;
}

#workskin .twt-icon-container {
  float: left;
}

#workskin .twt-icon {
  border-radius: 50%;
  width: 3.5em;
}

#workskin .twt-iconquote {
  border-radius: 50%;
  width: 2em;
}

#workskin .twt-id {
  font-size: 1em;
  padding-left: 1em;
  overflow: hidden;
}

#workskin .twt-name {
  font-weight: bold;
}

#workskin .twt-name:hover {
  text-decoration: underline;
  cursor: pointer;
}

#workskin .twt-handle {
  color: #657786;
}

#workskin .twt-handle:hover {
  cursor: pointer;
}

#workskin .twt-content {
  font-size: 1.3em;
  margin-bottom: -1em;
}

#workskin .twt-contentquote {
  margin-top: -1em;
  font-size: 1em;
}

#workskin .twt-timestamp {
  color: #657786;
  font-size: 1em;
}

#workskin hr.twt-sep,
#workskin hr.twt-sep-reply {
  border: none;
  height: 1px;
  width: 100%;
  background-color: #e6e6e6;
}

#workskin hr.twt-sep-reply {
  margin-left: -20px;
  padding-right: 40px;
}

#workskin .twt-stat1 {
  color: #657786;
  font-size: 0.9em;
}

#workskin .twt-quotebox {
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  margin-bottom: -1em;
}

#workskin .twt-image {
  float: center;
  max-width: 100%;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  margin-bottom: -1em;
}

#workskin .twt-replybox {
  margin-top: -2em;
}

#workskin .twt-icon-replycontainer {
  float: left;
}

#workskin .twt-replycontainer {
  padding-left: 1em;
  overflow: hidden;
}

#workskin .twt-replycontent {
  margin-top: -1em;
}

#workskin .twt-stat2 {
  color: #657786;
  font-size: 0.9em;
  margin-top: -1em;
}

#workskin .twt-social {
  float: left;
  margin-right: 2em;
  margin-bottom: -1em;
}

#workskin .twt-socialimg {
  height: 13px;
  margin-right: 3px;
}

#workskin .twt-hl {
  color: #1da1f2;
}

#workskin .twt-hl:hover {
  text-decoration: underline;
  cursor: pointer;
}
```

### Step 2 - Set the Work Skin for your Story

Create a new story or edit an existing one. There is an `Associations` section where you can set the newly created Work Skin under `Select Work Skin`.

### Step 3 - Use this App to Generate the HTML content of your Story

When you are satisfied with your Twitter discussion using [this app](https://anlanther.github.io/ao3-twitter-generator/), click on the `Download HTML` button at the top. This should trigger a `twitter-card-xxx.txt` file to download.

Open this `twitter-card-xxx.txt` file and copy the contents into the `Work Text` section of your story. Make sure to preview the contents once you are done.
