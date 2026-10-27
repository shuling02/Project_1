
$(document).ready(function () {
    // Update the footer year automatically.
    $("#currentYear").text(new Date().getFullYear());

    // Initialize jQuery UI Tabs.
    if ($("#faq-tabs").length) {
        $("#faq-tabs").tabs({
            activate: function (event, ui) {
                // Load the FAQ fragment the first time this tab is opened.
                if (ui.newPanel.attr("id") === "faq-lessons" &&
                    !ui.newPanel.data("loaded")) {

                    $("#faq-loading").text("Loading lesson FAQs...");

                    $("#ajax-faq-content").load(
                        "data/lesson-faqs.html",
                        function (response, status) {
                            if (status === "success") {
                                $("#faq-loading").hide();
                                ui.newPanel.data("loaded", true);
                            } else {
                                $("#faq-loading").text(
                                    "Unable to load FAQs. Please try again."
                                );
                            }
                        }
                    );
                }
            }
        });

        // Initialize jQuery UI Accordion.
        $("#faq-accordion").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });
    }
});
