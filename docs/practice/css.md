# CSS

## 遮罩
```css
.father {
  position: relative;
  width: 100px;
  height:100px;
}
.son {
  position: absolute;
  top: 50%;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 14px;
  text-align: center;
  color: #fff;
  background: #232f4d;
  opacity: 0;
  transform: translateY(-50%);

  &:hover {
    opacity: 0.8;
  }
}
```

