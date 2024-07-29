let id = item.ID;
if (row.isSelected) {
    this.selects = this.selects.filter(a => a != id);
    row.select(false);
} else {
    row.select(true);
    this.selects.push(id);
}
this.$emit('do-action', {
    ids: this.selects.filter(a => a != '')
});

let rowIndex = ''
let selection = []
function test(item, row) {
    if (row.isSelected) {
        row.select(false);
        let event = window.event;
        if (event.shiftKey) {
            if (this.rowIndex !== '') {
                let currentIndex = row.index;
                if (this.rowIndex > currentIndex) {
                    for (let i = currentIndex; i <= this.rowIndex; i++) {
                        let index = this.selection.indexOf(this.items[i])
                        if (index !== -1) {
                            this.selection.splice(index, 1);
                        }
                    }
                } else {

                    for (let i = this.rowIndex; i <= currentIndex; i++) {
                        let index = this.selection.indexOf(this.items[i])
                        if (index !== -1) {
                            this.selection.splice(index, 1);
                        }
                    }
                }
            } else {
                this.rowIndex = row.index;
            }
        } else {
            this.rowIndex = row.index;
        }
    } else {
        row.select(true);
        let event = window.event;
        if (event.shiftKey) {
            if (this.rowIndex !== '') {
                this.selection = [];
                let currentIndex = row.index;
                if (this.rowIndex > currentIndex) {
                    for (let i = currentIndex; i <= this.rowIndex; i++) {
                        this.selection.push(this.items[i]);
                    }
                } else {
                    for (let i = this.rowIndex; i <= currentIndex; i++) {
                        this.selection.push(this.items[i]);
                    }
                }
                let temp = [];
                for (let i = 0; i < this.selection.length; i++) {
                    if (temp.indexOf(this.selection[i]) == -1) {
                        temp.push(this.selection[i]);
                    }
                }
                this.selection = temp
            } else {
                this.rowIndex = row.index;
            }
        } else {
            this.rowIndex = row.index;
        }
    }
}