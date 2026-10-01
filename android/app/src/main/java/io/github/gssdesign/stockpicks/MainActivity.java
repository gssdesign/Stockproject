package io.github.gssdesign.stockpicks;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/** Full-screen view of the Stock Picks Desk website. */
public class MainActivity extends Activity {
    static final String SITE = "https://gssdesign.github.io/Stockproject/";

    private WebView web;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        // Blend the system bars into the app's dark top and bottom bars.
        getWindow().setStatusBarColor(Color.parseColor("#0E1116"));
        getWindow().setNavigationBarColor(Color.parseColor("#171B22"));
        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#0E1116"));
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        // Prices change a few times a day: always revalidate with the server.
        s.setCacheMode(WebSettings.LOAD_NO_CACHE);
        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
                Uri u = req.getUrl();
                if (u.toString().startsWith(SITE)) return false;
                // News sources and other links open in the browser.
                startActivity(new Intent(Intent.ACTION_VIEW, u));
                return true;
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest req, WebResourceError err) {
                if (req.isForMainFrame()) {
                    view.loadData("<html><body style='background:#0E1116;color:#E8EBF0;font-family:sans-serif;padding:32px'>"
                            + "<h3>Can't reach Stock Picks</h3><p>Check your internet connection, then pull down or reopen the app.</p>"
                            + "</body></html>", "text/html", "utf-8");
                }
            }
        });
        setContentView(web);

        String url = SITE;
        Uri data = getIntent().getData();
        if (data != null && data.toString().startsWith(SITE)) url = data.toString();
        if (state != null) web.restoreState(state); else web.loadUrl(url);

        PicksWidget.refreshAll(this);  // opening the app also refreshes the widget
    }

    @Override
    protected void onSaveInstanceState(Bundle out) {
        super.onSaveInstanceState(out);
        web.saveState(out);
    }

    @Override
    public void onBackPressed() {
        if (web.canGoBack()) web.goBack(); else super.onBackPressed();
    }
}
