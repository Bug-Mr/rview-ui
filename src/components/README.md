# rview-ui
	一套全新的uniapp组件
	
# After successful installation:

# At the top of the pages.json file, write:
'''

  "easycom": {
    "autoscan": true,
    "custom": {
      "^r-(.*)": "@dcloudio/rview-ui/r-$1/index.vue",
    }
  }

'''
# Then use it in the. vue file:

<template>
  <r-button>按钮</r-button>
</template>