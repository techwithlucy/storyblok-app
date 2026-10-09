# K75 Product Drop: Next.js + Storyblok + AWS Amplify

A product launch website for the **K75**, a fictional mechanical keyboard for cloud engineers. In this tutorial you will deploy the site to AWS, connect it to Storyblok, and manage its content (launch message, call to action, availability and an announcement banner) from Storyblok's Visual Editor, with no code changes and no redeploys.

Watch the video: _add your YouTube link here_

## What you will build

- A Next.js website hosted on **AWS Amplify**
- Content managed in **Storyblok** (a headless CMS)
- A **K75 Content** block that controls the hero text and button
- An **Announcement Banner** block that you can switch on and off from the editor
- A launch-day flow: edit, preview, **Publish**, and the live site updates

## Tech stack

| Tool | What it does |
|---|---|
| Next.js (App Router) + React + Tailwind CSS | The website |
| Storyblok | Content management and Visual Editor |
| AWS Amplify | Hosting and deployment from GitHub |

## Before you start

You need:

- A free [GitHub](https://github.com) account
- An [AWS](https://aws.amazon.com) account
- A free [Storyblok](https://www.storyblok.com) account
- [Node.js](https://nodejs.org) 20 or later (only needed if you want to run the site locally)

---

## Step 1: Deploy the app to AWS

1. Click **Fork** at the top of this repository to copy it to your own GitHub account.
2. Open the [AWS Amplify console](https://console.aws.amazon.com/amplify) and click **Deploy an app**.
3. Choose **GitHub** as the source, click **Next**, and select your forked `storyblok-app` repository.
4. Click **Next** again, then **Save and deploy**.
5. Wait a few minutes for the build to finish, then open the deployed URL.

> The site reads its content from Storyblok. Until you finish Steps 2 to 5 and publish your content, the deployed page can show an error or empty sections. This is expected.

## Step 2: Create your Storyblok space

1. Log in to [Storyblok](https://app.storyblok.com) and create a **new space**. Name it `My Space`.
2. Choose the **Europe (EU)** region. The project is configured for an EU space. If you pick another region, change the `region` value in `lib/storyblok.ts` (for example `us`).
3. When asked for your role, choose **Developer**.

## Step 3: Run the project locally (optional)

The Storyblok package (`@storyblok/react`) is already listed in `package.json`, so one install covers everything.

```bash
git clone https://github.com/<your-username>/storyblok-app.git
cd storyblok-app
npm install
```

Create a file named `.env.local` in the project root:

```
STORYBLOK_DELIVERY_API_TOKEN=your_token_here
```

To get the token, go to Storyblok → **Settings → Access tokens** and copy the **Preview** token.

Start the site:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Locally and on the live site, the page shows **published** content only, so you will see an error until you publish your Home story in Step 8. Use the Visual Editor to see drafts.

## Step 4: Set up the Visual Editor

**4.1 Tell Storyblok where your site lives**

1. In Storyblok, go to **Settings → Visual Editor**.
2. In **Location (default environment)**, paste your Amplify URL, for example `https://main.xxxxxxxx.amplifyapp.com/`.
3. Save.

**4.2 Give your live site access to your content**

1. In AWS Amplify, open your app → **Hosting → Environment variables**.
2. Click **Manage variables** and add:

   | Variable | Value |
   |---|---|
   | `STORYBLOK_DELIVERY_API_TOKEN` | Your Storyblok **Preview** token |

3. Save, then redeploy the app (**Deployments → Redeploy this version**) so Amplify picks up the variable.

**4.3 Set the Home story's path**

1. In Storyblok, go to **Content** and open the **Home** story.
2. Open **Config** (in the right-hand toolbar).
3. Make sure **Slug** is `home`, and set **Real path** to `/`.
4. Click **Save story configuration**.

Open the **Visual** tab. Your site should now load inside the Visual Editor.

## Step 5: Create the K75 Content block

**5.1 Create the block**

1. In Storyblok, open **Block Library** and click **New block**.
2. Name it exactly **`K75 Content`** (with the space and capital letters). The website code looks for this exact name.
3. Set the type to **Nestable block** and create it.

**5.2 Add three fields**

| Field name | Type |
|---|---|
| Availability | Text |
| Launch Message | Text |
| CTA Text | Text |

Click **Save**.

**5.3 Allow the block in your page**

1. In the Block Library, open the **page** block.
2. Find the **Body** field and make sure **K75 Content** is allowed under its blocks. (If Body allows all blocks, you can skip this.)
3. Save.

**5.4 Add it to the Home page**

1. Go to **Content → Home → Visual**.
2. In the **Body** list, click **+** and add **K75 Content**.
3. Enter the pre-launch values:

   | Field | Value |
   |---|---|
   | Availability | `Coming Soon` |
   | Launch Message | `Launching October 20` |
   | CTA Text | `Join the Waitlist` |

4. Now change them to prove the connection works:

   | Field | New value |
   |---|---|
   | Availability | `Available` |
   | Launch Message | `November 1` |
   | CTA Text | `Shop Now` |

5. Click **Save**. The three values update on the page in the Visual Editor.

> If your Home story contains sample blocks such as Teaser or Grid, you can delete them. The website does not use them.

## Step 6: Create the Announcement Banner block

**6.1 Create the block**

1. In **Block Library**, click **New block**.
2. Name it exactly **`announcement_banner`** (lowercase, with an underscore). Storyblok displays it as "Announcement Banner".
3. Set the type to **Nestable block** and create it.

**6.2 Add three fields**

| Field name | Type |
|---|---|
| Message | Text |
| Link Text | Text |
| Is Visible | Boolean |

Click **Save**.

**6.3 Allow the block in your page**

Open the **page** block, make sure **announcement_banner** is allowed in the **Body** field, and save.

**6.4 Add the banner to the Home page**

1. Go to **Content → Home → Visual**.
2. In the **Body** list, click **+** and add **Announcement Banner**.
3. Fill it in:

   | Field | Value |
   |---|---|
   | Message | `K75 drops November 1, join the waitlist for early access!` |
   | Link Text | `Join Waitlist` |
   | Is Visible | On |

4. Click **Save**. The banner appears at the top of the page.
5. Switch **Is Visible** off and save: the banner disappears. Switch it back on and save.

## Step 7: Add an image to the banner

1. In **Block Library**, open **announcement_banner**.
2. Add a new field:

   | Field name | Type |
   |---|---|
   | Image | Asset (images only) |

3. Save the block.
4. Go back to **Content → Home → Visual**, open the banner, and upload a keyboard image in the new **Image** field.
5. Click **Save**. The image appears in the banner.

## Step 8: Publish the website

Launch day. In **Content → Home → Visual**, change:

| Where | New value |
|---|---|
| K75 Content → Availability | `In Stock` |
| K75 Content → Launch Message | `Available Now` |
| K75 Content → CTA Text | `Buy Now` |
| Announcement Banner → Message | `K75 is live, order now.` |

1. Click **Save**. Check the changes in the editor preview.
2. Click **Publish**.
3. Open your Amplify URL in a new tab and refresh. The live site now shows all of your updated content.

From now on you can change content in Storyblok, click **Publish**, and the live site updates, with no code changes and no redeploy.

> Visitors to the live site see **published** content only. Drafts and unsaved edits appear only inside the Visual Editor.

---

## Troubleshooting

| Problem | What to check |
|---|---|
| The live site shows a 500 error or "Internal Server Error" | Publish your Home story at least once. Check that `STORYBLOK_DELIVERY_API_TOKEN` is set in Amplify, then redeploy. |
| The Visual Editor shows a blank page or refuses to connect | Check the **Location** URL in Settings → Visual Editor. It must start with `https://` and match your Amplify URL. |
| The hero text is empty | The block must be named exactly `K75 Content`, and its fields must be Availability, Launch Message and CTA Text. |
| The banner does not appear | The block must be named `announcement_banner`, be allowed in the page's **Body** field, and have **Is Visible** switched on. |
| "Component … doesn't exist" error | The Home story's content type must be `page`. |
| Content looks right in the editor but not on the live site | You have not clicked **Publish** yet. |
| Everything returns 404 | Check the token is from the same space, and that the space region matches `region` in `lib/storyblok.ts`. |

## Project structure

```
app/
  layout.tsx            Root layout
  page.tsx              Fetches the Home story from Storyblok
components/
  ProductDrop.tsx       Page layout, reads the K75 Content and banner blocks
  AnnouncementBanner.tsx  The announcement banner
  Navbar.tsx  Hero.tsx  FeatureGrid.tsx  ProductDetails.tsx  FAQ.tsx  FinalCTA.tsx  Footer.tsx
lib/
  storyblok.ts          Storyblok setup and component registration
public/images/          Product images
amplify.yml             Amplify build settings
```

## Resources

- [Storyblok: Next.js guide](https://www.storyblok.com/docs/guides/nextjs)
- [Storyblok: Visual Editor](https://www.storyblok.com/docs/concepts/visual-editor)
- [AWS Amplify Hosting docs](https://docs.aws.amazon.com/amplify/)
