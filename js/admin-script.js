jQuery(document).ready(function ($) {
  function handleToggleInputsGroupInstallment($inputCheckPass) {
    var disableInputs = $inputCheckPass.prop("checked");
    var $inputsGroupInstallment = $(".ipag-input-group-installment");

    var defaultAttrInput = {
      disabled: disableInputs,
    };

    if (disableInputs)
      defaultAttrInput = {
        ...defaultAttrInput,
        title: 'Campo não considerado pela regra "Repassar Juros ao Cliente"',
      };

    $inputsGroupInstallment.prop(defaultAttrInput);
  }

  function handleTogglePassInterest() {
    var elStyle = document.createElement('style');
    elStyle.textContent =
      `.select2-container--disabled .select2-selection {
        border-color: #ddd !important;
        background: #f6f6f6 !important;
        background: rgba(255, 255, 255, .5) !important;
        border-color: rgba(220, 220, 222, .75) !important;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, .04) !important;
      }

      .select2-container--disabled .select2-selection__rendered {
        color: #bbb !important;
      }
      `;

    document.documentElement.appendChild(elStyle);

    var $checkboxPassInterest = $("#woocommerce_ipag-gateway_pass_interest");

    if ($checkboxPassInterest.length) {
      handleToggleInputsGroupInstallment($checkboxPassInterest);

      $checkboxPassInterest.on("change", function (event) {
        handleToggleInputsGroupInstallment($(event.target));
      });
    }
  }

  handleTogglePassInterest();
});
