/* @ds-bundle: {"format":4,"namespace":"GraviqDesignSystem_bd9577","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"08fff2a92964","components/core/Button.jsx":"8808038309c9","components/core/Card.jsx":"f4cedc9192be","components/core/Tag.jsx":"6af56b38383f","components/feedback/Dialog.jsx":"791b27992798","components/feedback/Toast.jsx":"03c3d6e3d248","components/feedback/Tooltip.jsx":"40543fb58132","components/forms/Checkbox.jsx":"d228578f4179","components/forms/Input.jsx":"3bb883f7b0be","components/forms/Radio.jsx":"2ea764388bc6","components/forms/Select.jsx":"8059879a63fb","components/forms/Switch.jsx":"6153ed95182a","components/navigation/Tabs.jsx":"88146317b86e","ui_kits/platform/LoginScreen.jsx":"8a56030d6c35","ui_kits/platform/OpportunityDetail.jsx":"0db4dc015206","ui_kits/platform/OpportunityList.jsx":"6980136d281a","ui_kits/platform/Sidebar.jsx":"702c567b89db","ui_kits/platform/TeamView.jsx":"3489adb1c4c5","ui_kits/platform/Topbar.jsx":"58de96eabeac"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GraviqDesignSystem_bd9577 = window.GraviqDesignSystem_bd9577 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    bg: 'var(--charcoal-50)',
    fg: 'var(--charcoal-600)'
  },
  brand: {
    bg: 'var(--teal-50)',
    fg: 'var(--teal-700)'
  },
  success: {
    bg: 'var(--color-success-bg)',
    fg: 'var(--teal-700)'
  },
  warning: {
    bg: 'var(--color-warning-bg)',
    fg: 'var(--amber-700)'
  },
  error: {
    bg: 'var(--color-error-bg)',
    fg: 'var(--color-error)'
  }
};
function Badge({
  tone = 'neutral',
  children
}) {
  const t = tones[tone] || tones.neutral;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 10px',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      background: t.bg,
      color: t.fg
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: '8px 14px',
    fontSize: 'var(--text-sm)'
  },
  md: {
    padding: '11px 20px',
    fontSize: 'var(--text-base)'
  },
  lg: {
    padding: '14px 26px',
    fontSize: 'var(--text-md)'
  }
};
const variants = {
  primary: {
    background: 'var(--brand-primary)',
    color: 'var(--text-inverse)',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--charcoal-800)',
    color: 'var(--text-inverse)',
    border: '1px solid transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent'
  },
  accent: {
    background: 'var(--brand-accent)',
    color: 'var(--charcoal-900)',
    border: '1px solid transparent'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  children,
  onClick,
  style
}) {
  const v = variants[variant] || variants.primary,
    s = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: 'var(--brand-primary-hover)',
    secondary: 'var(--charcoal-700)',
    outline: 'var(--charcoal-50)',
    ghost: 'var(--charcoal-50)',
    accent: 'var(--amber-600)'
  }[variant];
  return React.createElement('button', {
    onClick,
    disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)',
      opacity: disabled ? 0.45 : 1,
      ...v,
      ...s,
      background: hover && !disabled ? hoverBg : v.background,
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  title,
  subtitle,
  children,
  padded = true
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: padded ? 'var(--space-6)' : 0,
      fontFamily: 'var(--font-body)'
    }
  }, (title || subtitle) && React.createElement('div', {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, title && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)'
    }
  }, title), subtitle && React.createElement('div', {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      marginTop: '2px'
    }
  }, subtitle)), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 10px 5px 12px',
      borderRadius: 'var(--radius-full)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, children, onRemove && React.createElement('button', {
    onClick: onRemove,
    'aria-label': 'Remove',
    style: {
      border: 'none',
      background: 'var(--charcoal-100)',
      color: 'var(--charcoal-600)',
      borderRadius: '50%',
      width: '16px',
      height: '16px',
      fontSize: '10px',
      lineHeight: '16px',
      cursor: 'pointer',
      padding: 0
    }
  }, '\u2715'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  footer
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--surface-overlay)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      fontFamily: 'var(--font-body)'
    },
    onClick: onClose
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-6)',
      minWidth: '340px',
      maxWidth: '480px'
    }
  }, title && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-primary)',
      marginBottom: 'var(--space-3)'
    }
  }, title), React.createElement('div', {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children), footer && React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px',
      marginTop: 'var(--space-6)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  success: {
    bg: 'var(--teal-700)'
  },
  error: {
    bg: 'oklch(45% .17 25)'
  },
  info: {
    bg: 'var(--charcoal-700)'
  }
};
function Toast({
  tone = 'info',
  children,
  onDismiss
}) {
  const t = tones[tone] || tones.info;
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: t.bg,
      color: 'var(--white)',
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      minWidth: '260px'
    }
  }, React.createElement('span', {
    style: {
      flex: 1
    }
  }, children), onDismiss && React.createElement('button', {
    onClick: onDismiss,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--white)',
      opacity: 0.7,
      cursor: 'pointer',
      fontSize: '14px'
    }
  }, '\u2715'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-block'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 6px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--charcoal-800)',
      color: 'var(--white)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: '18px',
      height: '18px',
      borderRadius: '5px',
      border: `1.5px solid ${checked ? 'var(--brand-primary)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--brand-primary)' : 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-inverse)',
      fontSize: '12px',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, checked && '\u2713'), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  helper,
  icon
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)'
    }
  }, label), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '0 12px',
      border: `1px solid ${error ? 'var(--color-error)' : focus ? 'var(--border-focus)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'box-shadow var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)'
    }
  }, icon, React.createElement('input', {
    type,
    value,
    placeholder,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      padding: '10px 0',
      fontSize: 'var(--text-base)',
      fontFamily: 'var(--font-body)',
      background: 'transparent',
      color: 'var(--text-primary)'
    }
  })), (error || helper) && React.createElement('span', {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--color-error)' : 'var(--text-secondary)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange(),
    style: {
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      border: `1.5px solid ${checked ? 'var(--brand-primary)' : 'var(--border-strong)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && React.createElement('span', {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: 'var(--brand-primary)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  value,
  onChange,
  options = []
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)'
    }
  }, label), React.createElement('select', {
    value,
    onChange,
    style: {
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      fontSize: 'var(--text-base)',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, options.map((o, i) => React.createElement('option', {
    key: i,
    value: o.value ?? o
  }, o.label ?? o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: '38px',
      height: '22px',
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--brand-primary)' : 'var(--charcoal-200)',
      position: 'relative',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: '2px',
      left: checked ? '18px' : '2px',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-fast) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)'
    }
  }, tabs.map((t, i) => {
    const isActive = (active ?? 0) === i;
    return React.createElement('button', {
      key: i,
      onClick: () => onChange && onChange(i),
      style: {
        padding: '10px 16px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)',
        color: isActive ? 'var(--text-brand)' : 'var(--text-secondary)',
        borderBottom: `2px solid ${isActive ? 'var(--brand-primary)' : 'transparent'}`,
        marginBottom: '-1px',
        transition: 'color var(--duration-fast) var(--ease-standard)'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/LoginScreen.jsx
try { (() => {
const gsx_LoginStyles = {
  wrap: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--surface-canvas)',
    fontFamily: 'var(--font-body)'
  },
  card: {
    width: '380px',
    background: 'var(--surface-card)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-lg)',
    padding: '40px 36px'
  },
  logo: {
    width: '150px',
    marginBottom: '28px'
  },
  h1: {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-xl)',
    fontWeight: 700,
    color: 'var(--text-primary)',
    margin: '0 0 6px'
  },
  p: {
    fontSize: 'var(--text-sm)',
    color: 'var(--text-secondary)',
    margin: '0 0 24px'
  }
};
function LoginScreen({
  onLogin
}) {
  const {
    Input,
    Button
  } = window.GraviqDesignSystem_bd9577;
  return /*#__PURE__*/React.createElement("div", {
    style: gsx_LoginStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: gsx_LoginStyles.card
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.jpg",
    style: gsx_LoginStyles.logo
  }), /*#__PURE__*/React.createElement("div", {
    style: gsx_LoginStyles.h1
  }, "Welcome back"), /*#__PURE__*/React.createElement("div", {
    style: gsx_LoginStyles.p
  }, "Sign in to see where AI belongs in your org."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onLogin,
    style: {
      justifyContent: 'center',
      marginTop: 6
    }
  }, "Sign in"))));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/OpportunityDetail.jsx
try { (() => {
function OpportunityDetail({
  opp,
  onClose
}) {
  const {
    Dialog,
    Badge,
    Button,
    Tag
  } = window.GraviqDesignSystem_bd9577;
  if (!opp) return null;
  return /*#__PURE__*/React.createElement(Dialog, {
    open: !!opp,
    title: opp.title,
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: onClose
    }, "Close"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: onClose
    }, "Approve for pilot"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, opp.dept), /*#__PURE__*/React.createElement(Tag, null, "Effort: ", opp.effort), /*#__PURE__*/React.createElement(Tag, null, "Impact: ", opp.impact)), /*#__PURE__*/React.createElement("p", null, "Graviq identified this workflow as a strong AI fit based on repetition, structured inputs, and available historical data. Estimated time saved: 6\u20139 hrs/week per person."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 700,
      color: 'var(--brand-primary)',
      marginTop: 8
    }
  }, opp.score, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-secondary)',
      fontWeight: 500
    }
  }, " /100 fit score")));
}
window.OpportunityDetail = OpportunityDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/OpportunityDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/OpportunityList.jsx
try { (() => {
const gsx_opps = [{
  id: 1,
  title: 'Auto-triage support tickets',
  dept: 'Customer Support',
  score: 91,
  effort: 'Low',
  impact: 'High',
  status: 'ready'
}, {
  id: 2,
  title: 'Summarize weekly finance reports',
  dept: 'Finance',
  score: 84,
  effort: 'Low',
  impact: 'High',
  status: 'ready'
}, {
  id: 3,
  title: 'Draft first-pass contract redlines',
  dept: 'Legal',
  score: 76,
  effort: 'Medium',
  impact: 'High',
  status: 'review'
}, {
  id: 4,
  title: 'Generate onboarding checklists',
  dept: 'People Ops',
  score: 68,
  effort: 'Low',
  impact: 'Medium',
  status: 'review'
}, {
  id: 5,
  title: 'Flag anomalies in expense reports',
  dept: 'Finance',
  score: 59,
  effort: 'Medium',
  impact: 'Medium',
  status: 'draft'
}];
function OpportunityList({
  onSelect
}) {
  const {
    Badge,
    Card
  } = window.GraviqDesignSystem_bd9577;
  const statusTone = {
    ready: 'success',
    review: 'warning',
    draft: 'neutral'
  };
  const statusLabel = {
    ready: 'Ready to deploy',
    review: 'In review',
    draft: 'Draft'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '0 32px 32px'
    }
  }, gsx_opps.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.id,
    onClick: () => onSelect(o),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-display)'
    }
  }, o.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, o.dept, " \xB7 Effort: ", o.effort, " \xB7 Impact: ", o.impact)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: statusTone[o.status]
  }, statusLabel[o.status]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--brand-primary)',
      minWidth: '52px',
      textAlign: 'right'
    }
  }, o.score)))))));
}
window.OpportunityList = OpportunityList;
window.gsx_opps = gsx_opps;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/OpportunityList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Sidebar.jsx
try { (() => {
const gsx_navItems = [{
  key: 'overview',
  label: 'Overview'
}, {
  key: 'opportunities',
  label: 'Opportunities'
}, {
  key: 'team',
  label: 'Team'
}, {
  key: 'settings',
  label: 'Settings'
}];
function Sidebar({
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '220px',
      minHeight: '100vh',
      background: 'var(--charcoal-800)',
      color: 'var(--white)',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.jpg",
    style: {
      width: '120px',
      background: '#fff',
      borderRadius: '6px',
      padding: '6px',
      marginBottom: '32px'
    }
  }), gsx_navItems.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.key,
    onClick: () => onSelect(it.key),
    style: {
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      marginBottom: '4px',
      cursor: 'pointer',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      background: active === it.key ? 'var(--teal-600)' : 'transparent',
      color: active === it.key ? '#fff' : 'oklch(80% .01 285)'
    }
  }, it.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      fontSize: 'var(--text-xs)',
      color: 'oklch(65% .01 285)'
    }
  }, "Graviq.ai \xA9 2026"));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/TeamView.jsx
try { (() => {
function TeamView() {
  const {
    Switch,
    Badge
  } = window.GraviqDesignSystem_bd9577;
  const [members, setMembers] = React.useState([{
    name: 'Priya Nair',
    role: 'Head of Ops',
    scan: true
  }, {
    name: 'Daniel Reyes',
    role: 'Finance Lead',
    scan: true
  }, {
    name: 'Amara Okafor',
    role: 'Support Manager',
    scan: false
  }]);
  const toggle = i => setMembers(m => m.map((x, idx) => idx === i ? {
    ...x,
    scan: !x.scan
  } : x));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontFamily: 'var(--font-body)'
    }
  }, members.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, m.role)), /*#__PURE__*/React.createElement(Switch, {
    checked: m.scan,
    onChange: () => toggle(i),
    label: "Included in scans"
  }))));
}
window.TeamView = TeamView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/TeamView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Topbar.jsx
try { (() => {
function Topbar({
  title,
  subtitle
}) {
  const {
    Button
  } = window.GraviqDesignSystem_bd9577;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 32px',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, subtitle)), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm"
  }, "+ New scan"));
}
window.Topbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Topbar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
